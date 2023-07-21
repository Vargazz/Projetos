import { Router } from 'express';
import usersController from '../controllers/userController';

const router = Router();

router.post('/', usersController.createUser);

export default router;