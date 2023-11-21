import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/index.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://ramasamyh:U5xNP9mapjGYljt5@cluster0.k5v4dpg.mongodb.net/?retryWrites=true&w=majority');//add connection details here
    registerRouter(app);

    //TODO: MongoDB connection
    //TODO: Initialize routes
}

export default initialize;