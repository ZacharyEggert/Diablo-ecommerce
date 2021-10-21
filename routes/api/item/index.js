const router = require('express').Router();

const { importFromReverb, clearAndImportFromReverb } = require('../../../controllers/itemController');
const itemController = require('../../../controllers/itemController');

router.route('/')
    .get(itemController.findAll)
    .post(itemController.create);

router.route('/:id')
    .get(itemController.findById)
    .put(itemController.update)
    .delete(itemController.remove);

router.route('/import-reverb/new')
    .post(importFromReverb);

router.route('/import-reverb/overwrite')
    .post(clearAndImportFromReverb);

module.exports = router;