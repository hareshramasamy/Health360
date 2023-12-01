import UserProfile from '../models/user-profile/user-profile-model.js';

// Save a new user profile to the database.
export const save = async (newUserProfile) => {
    const userProfile = new UserProfile(newUserProfile);
    return userProfile.save();
}
// Find a user profile by ID.
export const find = async (id) => {
    const userProfile = await UserProfile.findById(id).exec();
    return userProfile;
}

// Update a user profile by ID
export const update = async (updatedUserProfile, id) => {
    const userProfile = await UserProfile.findByIdAndUpdate(id, updatedUserProfile).exec();
    return userProfile;
} 

