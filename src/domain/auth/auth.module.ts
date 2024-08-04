import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { UserFirebaseRepository } from './repository/user.firebase.repository';
import { FirebaseModule } from 'src/infra/firebase/firebase.module';

@Module({
  controllers: [AuthController, FirebaseModule],
  providers: [
    AuthService,
    {
      provide: 'UserRepository',
      useClass: UserFirebaseRepository,
    },
  ],
})
export class AuthModule {}
