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
      const { page, limit } = req.query;
  
      if (!page) throw new Error("Page parameter is required");
  
      const pageNumber = parseInt(page);
      const limitNumber = parseInt(limit);
      const nextPage = (pageNumber - 1) * limitNumber;
  
      // Fetch paginated products
      const products = await productCollection
        .find({})
        .skip(nextPage)
        .limit(limitNumber)
        .toArray();
  
      // Get the total count of products to determine pagination info
      const totalCount = await productCollection.countDocuments();
  
      // Calculate if there are more pages
      const totalPages = Math.ceil(totalCount / limitNumber);
      const hasMore = pageNumber < totalPages;
  
      // Return products with pagination info
      res.status(200).json({
        products,
        totalCount,
        totalPages,
        hasMore, // Whether there are more products to load
      });
      
    } catch (error) {
      return res.status(500).json({
        message: "Error fetching PAGINATED products: ",
        Error: error.message,
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