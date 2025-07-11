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
    const { email, password } = req.body;

    // 1. Check if all fields are entered
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }

    try {
        // 2. Find if user exsits
        const user = await userCollection.findOne({ "email" :email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // 3. Compare entered password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // // 4. Generate JWT token (optional)
        // const token = jwt.sign(
        //     { userId: user._id, email: user.email },
        //     'your_jwt_secret', // Use env var in real apps
        //     { expiresIn: '1h' }
        // );

        res.status(200).json({
            message: "Login successful",
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Login error", error });
    }
};