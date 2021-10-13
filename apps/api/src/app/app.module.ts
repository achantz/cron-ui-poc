import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronController } from './cron.controller';

@Module({
  imports: [],
  controllers: [AppController, CronController],
  providers: [AppService],
})
export class AppModule {}
