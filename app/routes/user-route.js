import express from 'express';
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route('/sign-up')
    .post(userController.createUser);

export default router;