import express from 'express';
import * as userController from "../controllers/user-controller.js";
import * as userProfileController from '../controllers/user-profile-controller.js';
import * as BlogController from '../controllers/blog-controller.js';

const router = express.Router();

router.route('/user/sign-up')
    .post(userController.post);

router.route('/user/:id')
    .get(userController.get);

router.route('/user-profile')   
    .post(userProfileController.post)

router.route('/user-profile/:id')
    .get(userProfileController.get)
    .put(userProfileController.put)

router.route('/blogs')
    .get(BlogController.get)
    .post(BlogController.post);

router.route('/blogs/:id')
    .put(BlogController.put)
    .delete(BlogController.remove);
  
export default router;