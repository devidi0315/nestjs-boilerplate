
import { UserRepository } from './user.repository';
import { CreateEmailUserDto } from '../dto/user.dto';
import { UserEntity } from 'src/entity/UserEntity';
import { WithPagination } from 'src/lib/pagination/pagination.dto';
import { hashPassword } from 'src/lib/crypto/auth';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { FirebaseApp } from 'src/infra/firebase/firebase.provider';

@Injectable()
export class UserFirebaseRepository implements UserRepository {
  private readonly collection: FirebaseFirestore.CollectionReference;

  constructor(private readonly firebaseApp: FirebaseApp) {
    this.collection = this.firebaseApp.getFirestore().collection('user');
  }
  async create(user: CreateEmailUserDto): Promise<UserEntity> {
    const createUser = {
      email: user.email,
      password: await hashPassword(user.password),
    };

    const doc = await this.collection.add(createUser);

    return plainToInstance(UserEntity, {
      id: doc.id,
      ...createUser,
    });
  }
  deleteById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  find(): Promise<WithPagination<UserEntity>> {
    throw new Error('Method not implemented.');
  }
}
