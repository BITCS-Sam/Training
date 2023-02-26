import { Module } from '@nestjs/common';

import { MongooseModule } from "@nestjs/mongoose"

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


const MONGO_DB = "mongodb+srv://samnick:57489Raj@cluster0.t66nol7.mongodb.net/nestjs-demo?retryWrites=true&w=majority"

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(MONGO_DB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
