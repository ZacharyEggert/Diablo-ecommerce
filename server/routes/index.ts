import express from 'express';
const router = express.Router();

router.use('/api', require('./api'));

router.use('/', require('./app'));

export default router;