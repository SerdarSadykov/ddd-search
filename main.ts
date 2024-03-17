import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import * as express from 'express';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(express.json({limit: '100mb'}));
  app.use(express.urlencoded({extended: true, limit: '100mb'}));

  await app.listen(3000);
}

bootstrap();
