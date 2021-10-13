import { Controller, Get } from '@nestjs/common';

@Controller('cron')
export class CronController {
  @Get()
  getData() {
    return { date: new Date().toISOString() };
  }
}
