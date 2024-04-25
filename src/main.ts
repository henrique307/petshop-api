import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv'

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PetShop API')
    .setDescription("API for an online pet shop with JWT auth and dinamic data validation, using MongoDB for database.")
    .setVersion('1.0')
    .addBearerAuth({ type:"apiKey", description: "You need to login into /auth/login to get the bearer token first" })
    .addTag('Auth')
    .addTag('Pets')
    .addTag('Clients')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT);
}
bootstrap();
