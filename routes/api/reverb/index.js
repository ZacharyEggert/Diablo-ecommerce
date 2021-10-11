const router = require('express').Router();

const reverbController = require('../../../controllers/reverbController');

router.route('/')
    .get(reverbController.findAll);

router.route('/:id')
    .get(reverbController.findById);

router.route('/update')
    .post(reverbController.update);

module.exports = router;