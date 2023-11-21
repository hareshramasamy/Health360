import * as userService from '../services/user-service.js';
import {setResponse, setUserExistsErrorResponse, setInternalServerErrorResponse} from "./response-handler.js";

export const createUser = async (request, response) => {
    try {
        const newUser = {...request.body};
        const user = await userService.createUser(newUser);
        setResponse(user, response);
    } catch(err) {
        if(err.message === "User already Exists!") {
            setUserExistsErrorResponse(err, response);
        } else {
            setInternalServerErrorResponse(err, response);
        } 
    }
}