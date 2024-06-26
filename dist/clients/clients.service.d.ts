/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { BadRequestException } from '@nestjs/common';
import { CreateClientDto } from './client.dto/create-client.dto';
import { UpdateClientDto } from './client.dto/update-client.dto';
import { Client, ClientModel } from './schema/client.schema';
import { FilterQuery } from 'mongoose';
export declare class ClientsService {
    private readonly clientModel;
    constructor(clientModel: typeof ClientModel);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(query: FilterQuery<Client>): Promise<Client[]> | BadRequestException;
    findOne(id: string): Promise<Omit<import("mongoose").Document<unknown, {}, Client> & Client & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
