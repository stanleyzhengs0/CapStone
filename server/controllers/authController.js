import connectToProductDB from "../config/connectToProductDB.js";
import bcrypt from 'bcrypt';
const { db, userCollection } = await connectToProductDB()


export const registerUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

    // 1. check if all fields are entered
    if (!firstName || !lastName || !email || !password ) {
        return res.status(400).json({message : "All fields required"})
    }

    try{
        
        // 2. Check if user exists
        // const user = await productCollection.findOne({})

        // Hash user password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. create the new user
        const user = {
            firstName: firstName,
            lastName: lastName, 
            email: email,
            password: hashedPassword,
            createdAt: new Date()
        }

        await userCollection.insertOne(user)

        res.status(201).json({
            user
        });
        

    }catch(error){
        return res.status(500).json({message: "Error registering user: ", Error: error})
    }
}


export const loginUser = async (req, res) => {
    
}