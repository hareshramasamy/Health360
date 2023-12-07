import UserProfile from "../models/user-profile/user-profile-model.js";

// Save a new user profile to the database.
export const save = async (newUserProfile) => {
  try {
    const userProfile = new UserProfile(newUserProfile);
    const savedUserProfile = await userProfile.save();
    return savedUserProfile;
  } catch (error) {
    console.error("Error saving user profile:", error);
    throw error; 
  }
};
// Find a user profile by ID.
export const find = async (id) => {
try {
  const userProfile = await UserProfile.findById(id).exec();
  return userProfile;
} catch (error) {
    console.error("Error finding user profile: ",error)
    throw error;
}
  
};

// Update a user profile by ID
export const update = async (updatedUserProfile, id) => {
    try{
  const userProfile = await UserProfile.findByIdAndUpdate(
    id,
    updatedUserProfile
  ).exec();
  return userProfile;
    }
    catch(error) {
        console.error("Error updating user profile: ",error)
        throw error;
    }
};
