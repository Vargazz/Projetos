import { Request, Response } from 'express';
import usersService from '../services/userService';

const createUser = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;
  const token = await usersService.createUser(user);
  res.status(201).json({ token });
};

export default {
  createUser,
};