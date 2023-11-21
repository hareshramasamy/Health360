import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sexAtBirth: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    foodPreferance: {
        type: String,
        enum: ["Vegan", "Vegetarian", "Non-Vegetarian"],
        required: true
    },
    fitnessGoal: {
        type: String,
        enum: ["Weight-Loss", "Weight-Gain"],
        required: true
    }
},
{
    versionKey: false
}
);

const UserProfileModel = mongoose.model('userProfile', userProfileSchema);

export default UserProfileModel;