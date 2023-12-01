// models/workout.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workout = new Schema({
    name: {// Holds name of the workout
        type: String,
        required: true
    },
    description: {// Holds description of the workout
        type: String,
        required: true
    },
    exercises: [{// Holds particulars of the workout
        name: String,
        duration: Number,
        repetitions: Number,
        sets: Number
    }]
});

const WorkoutModel = mongoose.model('workout', workout);

export default WorkoutModel;
