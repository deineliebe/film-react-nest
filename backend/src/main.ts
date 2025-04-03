import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { TskvLogger } from './loggers/tskvLogger.service.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  app.useLogger(new TskvLogger());
  await app.listen(process.env.BACKEND_PORT);
}
bootstrap();
