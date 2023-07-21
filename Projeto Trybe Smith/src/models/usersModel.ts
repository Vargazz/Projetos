import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/IUser';
import connection from './connection';

const createUser = async (user: User): Promise<User> => {
  const { username, password, level, vocation } = user;
  const query = `INSERT INTO Trybesmith.users (username, password, level, vocation)
  VALUES (?,?,?,?)`;

  const [response] = await connection
    .execute<ResultSetHeader>(query, [username, password, level, vocation]);

  const userCreate = { id: response.insertId, username, password, level, vocation };

  return userCreate;
};

export default {
  createUser,
};