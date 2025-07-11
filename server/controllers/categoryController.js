import connectToProductDB from '../config/connectToProductDB.js'

const { db, productCollection } = await connectToProductDB()

export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        // Validate input
        if (!category) {
            return res.status(400).json({ message: "Missing 'category' parameter in query" });
        }

        const products = await productCollection.find({ category }).toArray();

        if (products.length === 0) {
            return res.status(404).json({ message: `No products found in category '${category}'` });
        }

        res.status(200).json(products);
        
    } catch (error) {
        console.error("Category fetch error:", error);
        res.status(500).json({
            message: "Error fetching products by category",
            error: error
        });
    }
};
