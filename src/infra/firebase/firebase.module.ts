import { Module } from '@nestjs/common';
import { FirebaseApp } from './firebase.provider';

@Module({
  controllers: [],
  providers: [FirebaseApp],
  exports: [FirebaseApp],
})
export class FirebaseModule {}
