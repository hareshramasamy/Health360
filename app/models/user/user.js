import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'userProfile',
    }
}
);

const UserModel = mongoose.model('user', User);

export default UserModel;