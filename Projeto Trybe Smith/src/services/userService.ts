import usersModel from '../models/usersModel';
import token from '../helpers/token';
import { User } from '../interfaces/IUser';

const createUser = async (user: User):Promise<string> => {
  const userCreated: User = await usersModel.createUser(user);
  const tokenCreated = token.createToken(userCreated);
  return tokenCreated;
};

export default {
  createUser,
};