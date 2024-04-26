import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './pets.dto/create-pet.dto';
import { UpdatePetDto } from './pets.dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetsModel } from './schema/pet.schema';
import { FilterQuery } from 'mongoose';
import { Client, ClientModel } from 'src/clients/schema/client.schema';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name) private readonly petModel: typeof PetsModel,
    @InjectModel(Client.name) private readonly clientModel: typeof ClientModel,
  ) { }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const ownerId = createPetDto.owner;

    const client = await this.clientModel.findById(ownerId)
    if (!client) throw new BadRequestException("The informed ownerId does not exist in our database, please register the client before registering the pet");

    const newPet = new this.petModel(createPetDto);

    client.pets = [...client.pets, newPet._id];

    await newPet.populate("owner");
    await client.save();

    return newPet.save();
  }

  findAll(query: FilterQuery<Client>): Promise<Pet[]> | BadRequestException {

    if (Object.keys(query).length === 0) return this.petModel.find().exec();
    if (query._id) throw new BadRequestException({ message: "_id não pode ser usadno nesta rota para pesquisa, por favor utilize /clientes/:id" })

    const mongoQuery = []

    for (const item in query) {
      mongoQuery.push(
        { [item]: { $regex: `${query[item]}`, $options: 'i' } }
      )
    }

    return this.petModel
      .find({ $and: mongoQuery })
      .exec()
  }

  async findOne(id: string) {
    const pet = await this.petModel.findById(id);
    if(!pet) throw new NotFoundException("PetId not found in our database")

    const detaildPet = await pet.populate("owner");

    return detaildPet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    const itemAlterado = await this.petModel.updateOne({ _id: id }, updatePetDto)

    if(!itemAlterado.matchedCount) throw new NotFoundException("Pet Id not found in our database");

    return itemAlterado
  }

  async remove(id: string) {
    const itemDeletado = await this.clientModel.deleteOne({_id: id});

    if(!itemDeletado.deletedCount) throw new NotFoundException("Pet Id not found in our database");

    return itemDeletado;
  }
}
