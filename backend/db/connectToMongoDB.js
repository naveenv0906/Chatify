import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://naveenv0906:Naveenv0906@todolist-cluster.uvwal.mongodb.net/?retryWrites=true&w=majority&appName=todolist-cluster');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;
