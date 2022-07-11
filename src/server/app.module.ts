import {Module} from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';
import {ApiModule} from './api.module';
import {AppController} from './app.controller';
import {EnvironmentModule} from './environment/environment.module';
import {NotFoundExceptionFilter} from './notFoundExceptionFilter';

@Module({
  imports: [
    ApiModule,
    EnvironmentModule
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: NotFoundExceptionFilter
  }]
})
export class AppModule {}
