import * as userProfileService from '../services/user-profile-service.js';
import * as userService from '../services/user-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';


export const post = async (request, response) => {
    try {
        const newUserProfile = {...request.body};
        const userProfile = await userProfileService.save(newUserProfile);
        const userId = request.body.userId; 
        const user = await userService.find(userId);

        if (user) {
            user.profile = userProfile._id; 
            await user.save();
        }
        
        setResponse(userProfile, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const userProfile = await userProfileService.find(id);
        setResponse(userProfile, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedUserProfile = {...request.body};
        const userProfile = await userProfileService.update(updatedUserProfile, id);
        setResponse(userProfile, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}
