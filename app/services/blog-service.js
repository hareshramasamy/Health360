import Blog from '../models/blog-model/blog.js';

export const search = async (params = {}) => {
    const blog = await Blog.find(params).exec();
    return blog;
}

export const save = async (newBlog) => {
    const blog = new Blog(newBlog);
    return blog.save();
}

export const updateBlog = async (id, Updateblog) => {
    const blog = await Blog.findByIdAndUpdate(id, Updateblog, { new: true }).exec();
    return blog;
}

export const deleteBlog = async (id) => {
    const blog = await Blog.findByIdAndDelete(id).exec();       
    return blog;
}
