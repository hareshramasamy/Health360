import mongoose, { version } from 'mongoose';

// Import mongoose and version from mongoose.
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // title to store the title of the blog.
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    // description to store the description of the blog.
    description: {
        type: String,
        required: true,
        maxlength: 5000,
    },
    // author to store the name of the author who created the blog.
    author: {
        type: String,
        required: true,
        maxlength: 50,
    },
    // createDate to store the date and time when the blog is created.
    createDate: {
        type: Date,
        default: Date.now,
    },
},

{
    versionKey: false,
});

const BlogModel = mongoose.model('Blog', blogSchema);  

export default BlogModel;   // Export the model.