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
    try{
        const { page } = req.query
        

        if (!page) throw new Error("Page parameter is required");

        const pageNumber = parseInt(page)

        const limit = 4

        const nextPage = (pageNumber -1) * limit

        const products = await productCollection.find({})
        .skip(nextPage)
        .limit(limit)
        .toArray()


        res.status(200).json(products)
        
    }catch(error){
        return res.status(500).json({message: "Error fetching PAGINATED products: ", Error: error})
    }
}

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