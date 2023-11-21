import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/index.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://venkatachalapathya:f5EP18SFJdTYPWoB@akash.hyot3.mongodb.net/TestDB?retryWrites=true&w=majority');//add connection details here
    registerRouter(app);

    //TODO: MongoDB connection
    //TODO: Initialize routes
}

export default initialize;