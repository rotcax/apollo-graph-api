import { Service } from 'typedi';
import { hash, genSalt } from 'bcryptjs';
import db from '../database/client';
import User from './user.type';
import UserInput from './user.input';

@Service()
export default class UserService {
  private datasource = db.getCollection('users');

  find(id: number): User {
    return this.datasource.findOne({ id });
  }

  findByEmail(email: string): User {
    return this.datasource.findOne({ email });
  }

  async create(data: UserInput): Promise<User> {
    const body = {
      ...data,
      id: this.datasource.count() + 1,
      password: await hash(data.password, await genSalt(10))
    }

    const { id } = this.datasource.insert(body);
    return this.find(id);
  }
}
