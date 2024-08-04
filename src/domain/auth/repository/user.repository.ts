import { WithPagination } from 'src/lib/pagination/pagination.dto';
import { CreateEmailUserDto } from '../dto/user.dto';
import { UserEntity } from 'src/entity/UserEntity';

export interface UserRepository {
  create(user: CreateEmailUserDto): Promise<UserEntity>;
  deleteById(id: string): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
  find(): Promise<WithPagination<UserEntity>>;
}
