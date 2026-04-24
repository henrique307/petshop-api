import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schema/pet.schema';
import { Client, ClientSchema } from '../clients/schema/client.schema';
import { ClientsService } from '../clients/clients.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pet.name, schema: PetSchema },
      { name: Client.name, schema: ClientSchema }
    ])
  ],
  controllers: [PetsController],
  providers: [PetsService, ClientsService]
})
export class PetsModule { }
