import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

export default async function connectToProductDB(){
  
    const client = new MongoClient(process.env.MONGO_DB_URL)
    await client.connect()
    const db = client.db(process.env.MONGO_DB )
    const productCollection = db.collection(process.env.MONGO_DB_PRODUCTS_COLLECTION)
    const userCollection =  db.collection(process.env.MONGO_DB_USERS_COLLECTION)
    
    console.log('✅ MongoDB connected');
    return { db, productCollection, userCollection, client }
}