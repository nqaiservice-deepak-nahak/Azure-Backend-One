import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableCors({
    origin: true,
    credentials: false,
  });

  app.setGlobalPrefix('api/service-one');

  const config = app.get(ConfigService);
  const port = Number(config.get<string>('APP_PORT') || '8001');

  await app.listen(port, '0.0.0.0');
  console.log('backend-one listening on port', port);
}

bootstrap();
