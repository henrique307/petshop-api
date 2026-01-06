import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config'
import { PetsModule } from './pets/pets.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

const pass = encodeURIComponent(config.app.MONGODB_PASS);

@Module({
  controllers: [AppController],
  imports: [
    ClientsModule,
    PetsModule,
    AuthModule,
    MongooseModule.forRoot(`mongodb+srv://petshopOwner:${pass}@petshopcluster.w4vix5f.mongodb.net/?appName=petshopCluster`)
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule { }
