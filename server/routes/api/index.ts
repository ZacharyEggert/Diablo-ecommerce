import express from 'express'
const router = express.Router()

import itemRoutes from './item'
import userRoutes from './user'
import reverbRoutes from './reverb'

router.use('/item', itemRoutes);
router.use('/user', userRoutes);
router.use('/reverb', reverbRoutes);

router.get('/', (_, res) => {
    res.json({ message: 'Hello API!' });
});

export default router;
