const router = require('express').Router();

const userController = require('../../../controllers/userController');

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.register);

router.route('/login')
    .post(userController.login);

router.route('/logout')
    .post(userController.logout);

router.route('/validate')
    .post(userController.validate);


module.exports = router;