import * as ExerciseService from '../services/exercise-service.js'
import { setResponse, setErrorResponse } from './response-handler.js';

export const getExercise = async (request, response) => {
    const { userId, type, date } = request.params;

    try {
        const exerciseData = await ExerciseService.getExercise(userId, type, date);
        setResponse(exerciseData, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const post = async (request, response) => {
    try{
        const exerciseList = {...request.body};
        const exercise = await ExerciseService.save(exerciseList);
        setResponse(exercise, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}