import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firestore } from 'firebase-admin';
import { App, initializeApp } from 'firebase-admin/app';
import { Configuration } from 'src/config/configuration';

@Injectable()
export class FirebaseApp implements OnModuleInit {
  private app: App;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    this.app = initializeApp(
      this.configService.get<Configuration['firebase']>('firebase'),
      'firebaseApp',
    );

    console.log(this.app.name);
  }

  getApp() {
    return this.app;
  }

  getFirestore() {
    const store = firestore(this.app);
    console.log(store);
    return store;
  }
}
