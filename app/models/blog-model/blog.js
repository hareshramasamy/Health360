import mongoose, { version } from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
    },
    author: {
        type: String,
        required: true,
        maxlength: 50,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
},

{
    versionKey: false,
});

const BlogModel = mongoose.model('Blog', blogSchema);

export default BlogModel;