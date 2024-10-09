// import mongoose, { mongo } from "mongoose";
import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
        console.log("MONGODB connection successful!\n", connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGODB connection failed!", error);
        process.exit(1);
    }
}


export default connectDB;