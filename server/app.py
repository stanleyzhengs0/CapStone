# run pip install -r requirements.txt in CL

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.neighbors import NearestNeighbors

df = pd.read_csv("model/capstone.products.csv")

categorical_features = ["category"]
numerical_features   = ["price", "view_count",
                        "number_of_reviews", "average_rating",
                        "stock_available"]

preprocessor = ColumnTransformer([
    ("onehot", OneHotEncoder(), categorical_features),
    ("scaler", StandardScaler(),  numerical_features)
])
X   = preprocessor.fit_transform(df)

knn = NearestNeighbors(n_neighbors=5, metric="euclidean")
knn.fit(X)

app = Flask(__name__)
CORS(app)

@app.route("/api/recommendations")
def recommend():
    mongo_id = request.args.get("_id")
    if not mongo_id:
        return jsonify({"error": "_id query parameter is required"}), 400

    # locate the DataFrame row that matches the _id 
    matches = df.index[df["_id"].astype(str) == mongo_id].tolist()
    if not matches:
        return jsonify({"error": f"No product found with _id '{mongo_id}'"}), 404

    idx = matches[0]                    # dynamic index derived from _id
    dists, inds = knn.kneighbors([X[idx]])
    rec_idx = [i for i in inds[0] if i != idx]

    payload = (
        df.loc[rec_idx, ["_id", "product_id", "title", "category", "price"]]
        .to_dict(orient="records")
    )
    return jsonify(payload)


if __name__ == "__main__":
    app.run(debug=True)
