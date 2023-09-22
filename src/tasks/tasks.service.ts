import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *')
  handleCron() {
    console.log('Inside the 45 sec');
    this.logger.debug('Called when the second is 45');
  }

  @Interval(10000)
  handleInterval() {
    console.log('Inside the 10 sec');
    this.logger.debug('Called every 10 seconds');
  }

  @Timeout(5000)
  handleTimeout() {
    console.log('Inside the 5 sec');
    this.logger.debug('Called once after 5 seconds');
  }
}
