import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  NotFoundException
} from '@nestjs/common';
import {Request, Response} from 'express';
import * as fs from 'fs';

// This filter catches any 404 errors and instead returns the
// single-page-web-app html.

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  private static html =
    fs.readFileSync(`${__dirname}/../client/dist/index.html`).toString();
  private static bundle =
    fs.readFileSync(`${__dirname}/../client/dist/bundle.js`).toString();

  public async catch(_: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    if (request.path.startsWith('/api')) {
      return response.status(404).send('Invalid api route');
    }

    if (request.path.endsWith('/bundle.js')) {
      return response.status(200)
                     .contentType('applicaton/javascript')
                     .send(NotFoundExceptionFilter.bundle);
    }

    return response.status(200)
                   .contentType('html')
                   .send(NotFoundExceptionFilter.html);
  }
}
