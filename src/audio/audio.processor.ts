import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { JobDto } from './job.dto';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  handleTranscode(job: JobDto) {
    console.log('Inside processor');
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
  }
}
