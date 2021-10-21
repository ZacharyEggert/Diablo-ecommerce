const router = require('express').Router();

const reverbController = require('../../../controllers/reverbController');

router.route('/')
    .get(reverbController.findAll);

router.route('/:id')
    .get(reverbController.findById);

router.route('/import/:id')
    .get(reverbController.importById);

router.route('/import/all')
    .post(reverbController.updateAll);

router.route('/import/recent')
    .post(reverbController.updateRecent);

module.exports = router;