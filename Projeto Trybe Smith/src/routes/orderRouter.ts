import { Router } from 'express';
import ordersController from '../controllers/orderController';

const router = Router();

router.get('/', ordersController.getAll);

export default router;