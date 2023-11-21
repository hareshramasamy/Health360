// Import required packages and modules
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/user/index.js';

// Function to initialize the Express app
const initialize = (app) => {
    // Apply CORS middleware to allow cross-origin requests
    app.use(cors());
    // Parse incoming JSON and URL-encoded requests
    app.use(express.json());
    app.use(express.urlencoded());
    // Connect to MongoDB database using Mongoose
    mongoose.connect('mongodb+srv://ramasamyh:U5xNP9mapjGYljt5@cluster0.k5v4dpg.mongodb.net/?retryWrites=true&w=majority');
    // Register API routes
    registerRouter(app);
}

// Export the initialization function
export default initialize;