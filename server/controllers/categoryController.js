import connectToProductDB from '../config/connectToProductDB.js'

const { db, productCollection } = await connectToProductDB()

export const getProductsByCategory = async (req, res) => {
    
} 