import { AppDataSource } from './../data-source';
import { UserEntity } from './db/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    AppDataSource.initialize().then(() => {
      console.log('Database initialized')
    })
    return 'Hello World!';
  }
}
