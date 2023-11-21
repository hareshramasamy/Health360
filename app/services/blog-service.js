import Blog from '../models/blog/blog.js';

// Search for all blogs
export const search = async (params = {}) => {
    const blog = await Blog.find(params).exec();
    return blog;
}

// Save a new blog entry to the database
export const save = async (newBlog) => {
    const blog = new Blog(newBlog); 
    return blog.save();
}

// Update an existing blog entry in the database
export const updateBlog = async (id, Updateblog) => {
    const blog = await Blog.findByIdAndUpdate(id, Updateblog, { new: true }).exec();
    return blog;
}

// Delete a blog entry from the database based on its ID
export const deleteBlog = async (id) => {
    const blog = await Blog.findByIdAndDelete(id).exec();       
    return blog;
}
