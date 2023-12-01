import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    // Age of the user.
    age: {
        type: Number,
        required: true
    },
    // Height of the user.
    height: {
        type: Number,
        required: true
    },
    // Weight of the user.
    weight: {
        type: Number,
        required: true
    },
    // Sex assigned at birth (Male/Female).
    sexAtBirth: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    // Dietary preference (Vegan/Vegetarian/Non-Vegetarian).
    foodPreferance: {
        type: String,
        enum: ["Vegan", "Vegetarian", "Non-Vegetarian"],
        required: true
    },
    // Fitness goal (Weight-Loss/Weight-Gain).
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

// Mongoose Model for UserProfile
const UserProfileModel = mongoose.model('userProfile', userProfileSchema);

export default UserProfileModel;