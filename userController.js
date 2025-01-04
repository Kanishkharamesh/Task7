/* import user from "../models/userModel.js";
export const fetch =async(req, res)=>{
    try{
        res.send("Hello world");

    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
} */


// this below code is for the postman for create
/* import User from "../models/userModel.js";

export const fetch = async (req, res) => {
    try {
        if (req.method === "GET") {
            // Fetch all users
            const users = await User.find();
            res.status(200).json(users);
        } else if (req.method === "POST") {
            // Create a new user
            const { name, email, address } = req.body;

            // Validate input
            if (!name || !email || !address) {
                return res.status(400).json({ error: "All fields are required" });
            }

            // Create and save user
            const newUser = new User({ name, email, address });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } else {
            res.status(405).json({ error: "Method not allowed" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};
 */



/* // this is to update the data in the postman
import User from "../models/userModel.js";
// Create a new user
export const create = async (req, res) => {
    try {
        const { name, email, address } = req.body;

        // Check for missing fields
        if (!name || !email || !address) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Save new user
        const newUser = new User({ name, email, address });
        const savedUser = await newUser.save();
        res.status(201).json({ data: savedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Fetch all users
export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }
        res.status(200).json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a user
export const update = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user exists
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update user
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ data: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}; */



/* // this code is to delete a data in the postman
import User from "../models/userModel.js";
// Create a new user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body); // Create a new user instance with the request body
        const { email } = userData; // Extract the email field

        // Check if the user already exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Save the user to the database
        const savedData = await userData.save();
        res.status(200).json({ data: savedData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Fetch all users
export const fetch = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users

        if (users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }

        res.status(200).json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a user by ID
export const update = async (req, res) => {
    try {
        const { id } = req.params; // Get the user ID from the request parameters

        // Check if the user exists
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user data
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ data: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a user by ID
export const remove = async (req, res) => {
    try {
        const { id } = req.params; // Get the user ID from the request parameters

        // Check if the user exists
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ error: "User not found" });
        }

        // Delete the user
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};
 */

// this code is to fetch one data
import user from "../models/userModel.js";
export const create =async(req, res)=>{
    try{
        
        let userdata = new user(req.body)
        const{email}=userdata;

        const userExist=await user.findOne({email});

        if(userExist){
            res.status(400).json({error:"user already exist"});
        }
        else{
           const savedata=await userdata.save();
            res.status(200).json({data:savedata});
        }
        
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}

export const fetch =async(req, res)=>{
    try{       
        const users = await user.find();
        if(users.length===0){
            res.status(404).json({error:"user not found"});
        }
        res.status(200).json({data:users});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
    
export const update =async(req, res)=>{
    try{       
       const id=req.params.id;
       const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
           const updatedusers = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({data:updatedusers});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
  
export const deleted =async(req, res)=>{
    try{       
       const id=req.params.id;
       const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
           const deletedusers = await user.findByIdAndDelete(id);
        res.status(200).json({data:deletedusers});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
export const findvalue = async(req, res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
        res.status(200).json({data:userExist});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}