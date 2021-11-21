import express from 'express'
const router = express.Router()

import { getAllUsers, register, login, logout, validate } from '@controllers/userController';
import { RequestWithUser } from 'server/types';

router.get('/', getAllUsers);
router.post('/', (req, res) => register(req as RequestWithUser, res));

router.post('/login', (req, res) => login(req as RequestWithUser, res));

router.post('/logout', (req, res) => logout(req as RequestWithUser, res));

router.post('/validate', (req, res) => validate(req as RequestWithUser, res));


export default router;