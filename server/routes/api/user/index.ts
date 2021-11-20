import express from 'express'
const router = express.Router()

import userController from '../../../controllers/userController';

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.register);

router.route('/login')
    .post(userController.login);

router.route('/logout')
    .post(userController.logout);

router.route('/validate')
    .post(userController.validate);


export default router;