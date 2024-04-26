import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './client.dto/create-client.dto';
import { UpdateClientDto } from './client.dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientModel } from './schema/client.schema';
import { FilterQuery } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private readonly clientModel: typeof ClientModel) { }

  create(createClientDto: CreateClientDto): Promise<Client> {
    const client = new this.clientModel(createClientDto);
    return client.save();
  }

  findAll(query: FilterQuery<Client>): Promise<Client[]> | BadRequestException {

    if (Object.keys(query).length === 0) return this.clientModel.find().exec();
    if (query._id) throw new BadRequestException({ message: "_id não pode ser usadno nesta rota para pesquisa, por favor utilize /clientes/:id" })

    const mongoQuery = []

    for (const item in query) {
      mongoQuery.push(
        { [item]: { $regex: `${query[item]}`, $options: 'i' } }
      )
    }

    return this.clientModel
      .find({ $and: mongoQuery })
      .exec()
  }

  async findOne(id: string) {
    const client = await (this.clientModel.findById(id).populate("pets"));
    if (!client) throw new NotFoundException("Client Id not foung in our database");

    const detaildClient = client.populate("pets");

    return detaildClient;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const itemAlterado = await this.clientModel.updateOne({ _id: id }, updateClientDto)

    if(!itemAlterado.matchedCount) throw new NotFoundException("Client Id not found in our database");

    return itemAlterado;
  }

  async remove(id: string) {
    const itemDeletado = await this.clientModel.deleteOne({_id: id});

    if(!itemDeletado.deletedCount) throw new NotFoundException("Client Id not found in our database");

    return itemDeletado;
  }
}
