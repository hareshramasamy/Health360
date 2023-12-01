import mongoose from 'mongoose';

// Import mongoose and version from mongoose.

const Schema = mongoose.Schema;

const Diet = new Schema({
    name: {// Holds the name
        type: String,
        required: true
    },
    description: {// Holds the description
        type: String,
        required: true
    },
    meals: [{// Holds the meal options
        name: String,
        description: String,
        calories: Number,
        
    }]
});

const DietModel = mongoose.model('diet', Diet);

export default DietModel;
