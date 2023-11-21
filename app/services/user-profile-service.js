import UserProfile from '../models//User-profile model/user-profile-model.js';


export const save = async (newUserProfile) => {
    const userProfile = new UserProfile(newUserProfile);
    return userProfile.save();
}

export const find = async (id) => {
    const userProfile = await UserProfile.findById(id).exec();
    return userProfile;
}

export const update = async (updatedUserProfile, id) => {
    const userProfile = await UserProfile.findByIdAndUpdate(id, updatedUserProfile).exec();
    return userProfile;
} 

