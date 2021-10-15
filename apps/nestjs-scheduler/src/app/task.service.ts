import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private http: HttpService) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    this.logger.debug('Scheduled job started');

    const response = await this.http
      .get('http://localhost:3333/api/cron')
      .toPromise()
      .then((res) => {
        return res.data;
      });

    this.logger.debug(`Response: ` + JSON.stringify(response));
    this.logger.debug('Scheduled job finished');
  }
}
