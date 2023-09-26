import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersMoudel } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { AudioModule } from './audio/audio.module';
import { EventsModule } from './gatewaysevents/events.module';

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
    EventsModule,
    UsersMoudel,
    ScheduleModule.forRoot(),
    TasksModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
