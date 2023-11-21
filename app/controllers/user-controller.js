import * as userService from '../services/user-service.js';
import {setResponse, setUserExistsErrorResponse, setInternalServerErrorResponse} from "./response-handler.js";

export const post = async (request, response) => {
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

export const get = async (request,response) => {
    try{
        const id = request.params.id;
        const user = await userService.find(id);
        setResponse(user, response);
    } catch(err) {
        setInternalServerErrorResponse(err, response);
    }
}