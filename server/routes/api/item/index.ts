import express from 'express'
const router = express.Router()

import * as itemController from '../../../controllers/itemController';

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

export default router;