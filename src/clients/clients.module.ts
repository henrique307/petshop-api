import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client, ClientSchema } from './schema/client.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [ClientsService],
  exports: [ClientsService, MongooseModule], // importante
})
export class ClientsModule {}
