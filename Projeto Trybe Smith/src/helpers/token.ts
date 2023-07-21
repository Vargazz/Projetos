import jwt from 'jsonwebtoken';
import { User } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET as string;

const createToken = async (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token;
};

export default {
  createToken,
};