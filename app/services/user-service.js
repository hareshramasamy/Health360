import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const createUser = async (newUser) => {
    const {firstName, lastName, userName, email, password, created_at} = newUser;
    const passwordHash = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({email});
    if(existingUser) {
        throw new Error(
            "User already Exists!"
        );
    }

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
