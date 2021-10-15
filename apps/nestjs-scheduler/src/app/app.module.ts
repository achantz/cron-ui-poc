import { HttpModule, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
