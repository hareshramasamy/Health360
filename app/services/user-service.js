import User from '../models/user/user.js';
import bcrypt from 'bcrypt';

//createUser method for creating a new user only when there is no existing user with the same email provided in the newUser object
export const createUser = async (newUser) => {
    const {firstName, lastName, userName, email, password, created_at} = newUser;
    //creating password hash for securely storing the password to the database
    const passwordHash = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({email});
    if(existingUser) {
        throw new Error(
            "User already Exists!"
        );
    }

    //saving the newly created user after confirming that the provided email does not exists already
    const user = new User({
        firstName,
        lastName,
        userName,
        email,
        password: passwordHash,
        created_at
      });
      return await user.save();
}

//find a user by id that is provided from the controller, and return the user object as response
export const find = async (id) => {
    const user = await User.findById(id).exec();
    return user;
}