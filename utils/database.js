// backend/utils/database.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../.env" // Ensure this is correct
});

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
};

export default databaseConnection;
