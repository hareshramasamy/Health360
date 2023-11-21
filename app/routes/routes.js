import express from 'express';
import * as userController from "../controllers/user-controller.js";
import * as userProfileController from '../controllers/user-profile-controller.js';
import * as BlogController from '../controllers/blog-controller.js';

// Create an Express router instance
const router = express.Router();
// Route to handle user sign-up
router.route('/user/sign-up')
    .post(userController.post);
// Route to get user details by ID
router.route('/user/:id')
    .get(userController.get);
// Route to create a new user profile
router.route('/user-profile')   
    .post(userProfileController.post)
// Routes to get and update user profile by ID
router.route('/user-profile/:id')
    .get(userProfileController.get)
    .put(userProfileController.put)
// Routes to get all blogs and create a new blog
router.route('/blogs')
    .get(BlogController.get)
    .post(BlogController.post);
// Routes to update and delete a blog by ID
router.route('/blogs/:id')
    .put(BlogController.put)
    .delete(BlogController.remove);
// Export the router for use in the main application
export default router;