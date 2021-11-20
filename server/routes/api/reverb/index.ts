import express from 'express'
const router = express.Router()

import reverbController from '../../../controllers/reverbController';

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

export default router;