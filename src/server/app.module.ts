import {Module} from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';
import {AppController} from './app.controller';
import {EnvironmentModule} from './environment/environment.module';
import {NotFoundExceptionFilter} from './notFoundExceptionFilter';

@Module({
  imports: [
    EnvironmentModule
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: NotFoundExceptionFilter
  }]
})
export class AppModule {}
