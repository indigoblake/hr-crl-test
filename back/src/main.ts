import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: check if acceptable for production
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
