import { UserEntity } from 'src/entity/UserEntity';
import { WithPagination } from 'src/lib/pagination/pagination.dto';
import { CreateEmailUserDto } from '../dto/user.dto';
import { UserRepository } from './user.repository';
import { v4 } from 'uuid';
import UserException from '../exception/user.exception';

export class UserRepositoryTest implements UserRepository {
  users: UserEntity[] = [];
  constructor() {
    this.users = [];
  }
  async create(user: CreateEmailUserDto): Promise<UserEntity> {
    const newUser = {
      id: v4(),
      username: user.email,
      email: user.email,
      password: user.password,
    };
    this.users.push(newUser);

    return newUser;
  }
  async deleteById(id: string): Promise<UserEntity> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw UserException.NotFoundException(id);
    }

    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);

    return deletedUser;
  }
  async findById(id: string): Promise<UserEntity> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw UserException.NotFoundException(id);
    }

    return user;
  }
  async find(): Promise<WithPagination<UserEntity>> {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 10,
        totalCount: this.users.length,
        totalPages: 1,
      },
      items: this.users,
    };
  }
}
