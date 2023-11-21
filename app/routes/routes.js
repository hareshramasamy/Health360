import express from 'express';
import * as userController from "../controllers/user-controller.js";
import * as userProfileController from '../controllers/userProfileController.js';

const router = express.Router();

router.route('/user/sign-up')
    .post(userController.post);

router.route('/user/:id')
    .get(userController.get);

    router.route('/userProfile')   
    .post(userProfileController.post)

router.route('/userProfile/:id')
    .get(userProfileController.get)
    .put(userProfileController.put)

export default router;