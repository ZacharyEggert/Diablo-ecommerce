const router = require('express').Router();

const itemController = require('../../../controllers/itemController');

router.route('/')
    .get(itemController.findAll)
    .post(itemController.create);

router.route('/:id')
    .get(itemController.findById)
    .put(itemController.update)
    .delete(itemController.remove);

router.route('/import-reverb/new')
    .post(itemController.importFromReverb);

router.route('/import-reverb/overwrite')
    .post(itemController.clearAndImportFromReverb);

module.exports = router;