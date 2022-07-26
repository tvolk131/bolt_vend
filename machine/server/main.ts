import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {EnvironmentService} from './environment/environment.service';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const environmentService = app.get(EnvironmentService);
  const port = environmentService.getArgs().port;
  await app.listen(port);
  console.log(`Server is listening on port ${port}`);
};

bootstrap();
