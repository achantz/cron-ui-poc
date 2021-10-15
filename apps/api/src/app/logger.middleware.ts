import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import * as express from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: express.Request, res: express.Response, next: () => void) {
    Logger.debug(`${req.method} => ${req.originalUrl}`);
    next();
  }
}
