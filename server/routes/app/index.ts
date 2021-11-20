import express from 'express';
const router = express.Router();
import path from 'path';

router.get('/', (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, '../../client/build/index.html')
    );
});

export default router;
