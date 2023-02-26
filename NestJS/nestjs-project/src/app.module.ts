import { CatsService } from './cats/services/cats/cats.service';
import { CatsController } from './cats/controller/cats/cats.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './typeorm/entities/Cat';
import { JwtModule } from "@nestjs/jwt"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '57489Raj',
      database: 'nestjs_project',
      entities: [Cat],
      synchronize: true,
    }), TypeOrmModule.forFeature([Cat]), JwtModule.register({
      secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNhbSBOaWNrIiwiaWF0IjoxNTE2MjM5MDIyfQ.G1-mR5soC6prqarSBWJxk2DOB6b3Qi4MeUhk6_9sNhM",
      signOptions: {
        expiresIn: 3600
      },
    })
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule { } 
