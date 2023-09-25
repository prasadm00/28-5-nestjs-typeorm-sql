import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';
import { AudioProcessor } from './audio.processor';

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue,
    private readonly audioService: AudioProcessor,
  ) {}

  @Post('transcode')
  async transcode() {
    console.log('Inside audio controller');

    this.audioService.handleTranscode({ id: 1, name: 'abc', data: 'Prased' });

    await this.audioQueue.add('transcode', {
      file: 'test',
    });
  }
}
