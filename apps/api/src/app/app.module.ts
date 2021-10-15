import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateController } from './cron.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, DateController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('date');
  }
}
