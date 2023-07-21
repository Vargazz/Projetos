import { Router } from 'express';
import loginValidate from '../middlewares/validateLogin';
import validaToken from '../middlewares/validaToken';
import usersController from '../controllers/usersController';

const routers = Router();

routers.get('/validate', validaToken, usersController.userRole);
routers.post('/', loginValidate, usersController.findUser);

export default routers;
