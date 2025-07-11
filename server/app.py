from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from sklearn.neighbors import NearestNeighbors
import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample dataset to simulate your products (You can replace this with the actual dataset)
df = pd.read_csv('model/electronics_store_dummy_data.csv')  # Load your dataset here

# Preprocess the dataset (you can put this in a function if needed)
categorical_features = ['category']
numerical_features = ['price', 'view_count', 'number_of_reviews', 'average_rating', 'stock_available']

preprocessor = ColumnTransformer(
    transformers=[
        ('onehot', OneHotEncoder(), categorical_features),
        ('scaler', StandardScaler(), numerical_features)
    ])
X = preprocessor.fit_transform(df)

# Fit the Nearest Neighbors model
knn = NearestNeighbors(n_neighbors=5, metric='euclidean')
knn.fit(X)

@app.route('/api/recommendations', methods=['GET'])
def recommend():
    product_id = request.args.get('product_id')  # Get product ID from request
    if not product_id:
        return jsonify({"error": "Product ID is required"}), 400

    # Find the product index from the product ID
    product_idx = df[df['product_id'] == product_id].index[0]
    
    # Get similar products from the model
    distances, indices = knn.kneighbors([X[product_idx]])

    # Prepare the recommended product data
    recommended_products = df.iloc[indices[0]]
    recommendations = recommended_products[['product_id', 'title', 'price', 'image']].to_dict(orient='records')
    
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
