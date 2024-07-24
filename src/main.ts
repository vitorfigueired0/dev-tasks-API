import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger))

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Dev Tasks API')
    .setVersion('1.0.0')
    .addTag('User')
    .addTag('Task')
    .addTag('Auth')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}

bootstrap();
