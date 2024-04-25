import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client, ClientSchema } from './schema/client.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
    ])
  ],
})
export class ClientsModule { }
