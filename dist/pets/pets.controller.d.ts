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
import { PetsService } from './pets.service';
import { CreatePetDto } from './pets.dto/create-pet.dto';
import { UpdatePetDto } from './pets.dto/update-pet.dto';
import { FilterQuery } from 'mongoose';
import { Client } from 'src/clients/schema/client.schema';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    create(createPetDto: CreatePetDto): Promise<import("./schema/pet.schema").Pet>;
    findAll(query: FilterQuery<Client>): Promise<import("./schema/pet.schema").Pet[]> | import("@nestjs/common").BadRequestException;
    findOne(id: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("./schema/pet.schema").Pet> & import("./schema/pet.schema").Pet & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
