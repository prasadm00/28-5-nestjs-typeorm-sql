import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersMoudel } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Pm@12345',
      database: 'sys',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersMoudel,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
