import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async loginWithEmail(email: string, password: string) {
    return await this.userRepository.create({ email, password });
  }
}
