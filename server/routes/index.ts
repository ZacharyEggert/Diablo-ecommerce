import express from 'express';
import apiRoutes from './api';
// import appRoutes from './app';

const router = express.Router();

router.use('/api', apiRoutes);

// router.use('/', appRoutes);

export default router;
