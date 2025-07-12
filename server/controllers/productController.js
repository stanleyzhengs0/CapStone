import connectToProductDB from '../config/connectToProductDB.js'
import { ObjectId } from 'mongodb';

const { db, productCollection } = await connectToProductDB()

export const getProducts = async (req, res) => {
    try{
        // const collection = db.collections('products')

        const products = await productCollection.find().toArray()

        res.status(200).json(products)
    }catch(error){

        return res.status(500).json({message: "Error fetching products: ", Error: error})
    }
}

export const getPaginatedProducts = async (req, res) => {
  try {
    const { page, limit, category } = req.query;

    if (!page) {
      return res.status(400).json({ message: "Page parameter is required" });
    }

    const pageNumber  = parseInt(page,  10);
    const limitNumber = parseInt(limit, 10) || 20;
    const skipCount   = (pageNumber - 1) * limitNumber;

    // Build filter: if category is passed, only match that category
    const filter = {};
    if (category) {
      filter.category = category;
    }

    // Count matching documents
    const totalCount = await productCollection.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limitNumber);
    const hasMore    = pageNumber < totalPages;

    // Fetch the page
    const products = await productCollection
      .find(filter)
      .skip(skipCount)
      .limit(limitNumber)
      .toArray();

    return res.status(200).json({
      products,
      totalCount,
      totalPages,
      hasMore,
    });
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    return res.status(500).json({
      message: "Error fetching paginated products",
      error:   error.message,
    });
  }
};

  

export const getProductDetail = async (req, res) => {
    try{
        const { id } = req.query

        if (!id) throw new Error("Product id parameter is required");

        //mongo _id are usually Objectid strings
        //convert string to objectId String
        const objectId = new ObjectId(id)
        const product = await productCollection.findOne({_id : objectId})
        res.status(200).json(product)
        
    }catch(error){
        return res.status(500).json({message: "Error fetching product details: ", Error: error})
    }
}