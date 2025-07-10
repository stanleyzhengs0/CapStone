import connectToProductDB from '../config/connectToProductDB.js'

const { db, productCollection } = await connectToProductDB()

export const getProducts = async (req, res) => {
    try{
        // const collection = db.collections('products')

        const products = await productCollection.find().toArray()

        res.status(200).json(products)
    }catch(error){
        console.error("Error fetching products: ", error)
    }
}

export const getPaginatedProducts = async (req, res) => {
    try{
        const { page } = req.params

        const pageNumber = parseInt(page)

        const limit = 3

        const nextPage = (pageNumber -1) * limit

        const products = await productCollection.find({})
        .skip(nextPage)
        .limit(limit)
        .toArray()


        res.status(200).json(products)
        
    }catch(error){
        console.error("Error fetching PAGINATED products: ", error)
    }
}