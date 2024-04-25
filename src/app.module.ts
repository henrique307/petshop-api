import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv'
import { PetsModule } from './pets/pets.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

config()

const pass = encodeURIComponent(process.env.MONGODB_PASS);

@Module({
  controllers: [AppController],
  imports: [
    ClientsModule,
    PetsModule,
    AuthModule,
    MongooseModule.forRoot(`mongodb+srv://henrique:${pass}@cluster0.mzxpyql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule { }
