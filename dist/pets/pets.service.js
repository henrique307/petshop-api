"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pet_schema_1 = require("./schema/pet.schema");
const client_schema_1 = require("../clients/schema/client.schema");
let PetsService = class PetsService {
    constructor(petModel, clientModel) {
        this.petModel = petModel;
        this.clientModel = clientModel;
    }
    async create(createPetDto) {
        const ownerId = createPetDto.owner;
        const client = await this.clientModel.findById(ownerId);
        if (!client)
            throw new common_1.BadRequestException("The informed ownerId does not exist in our database, please register the client before registering the pet");
        const newPet = new this.petModel(createPetDto);
        client.pets = [...client.pets, newPet._id];
        await newPet.populate("owner");
        await client.save();
        return newPet.save();
    }
    findAll(query) {
        if (Object.keys(query).length === 0)
            return this.petModel.find().exec();
        if (query._id)
            throw new common_1.BadRequestException({ message: "_id não pode ser usadno nesta rota para pesquisa, por favor utilize /clientes/:id" });
        const mongoQuery = [];
        for (const item in query) {
            mongoQuery.push({ [item]: { $regex: `${query[item]}`, $options: 'i' } });
        }
        return this.petModel
            .find({ $and: mongoQuery })
            .exec();
    }
    async findOne(id) {
        const pet = await this.petModel.findById(id);
        if (!pet)
            throw new common_1.NotFoundException("PetId not found in our database");
        const detaildPet = await pet.populate("owner");
        return detaildPet;
    }
    async update(id, updatePetDto) {
        const itemAlterado = await this.petModel.updateOne({ _id: id }, updatePetDto);
        if (!itemAlterado.matchedCount)
            throw new common_1.NotFoundException("Pet Id not found in our database");
        return itemAlterado;
    }
    async remove(id) {
        const itemDeletado = await this.clientModel.deleteOne({ _id: id });
        if (!itemDeletado.deletedCount)
            throw new common_1.NotFoundException("Pet Id not found in our database");
        return itemDeletado;
    }
};
exports.PetsService = PetsService;
exports.PetsService = PetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pet_schema_1.Pet.name)),
    __param(1, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [Object, Object])
], PetsService);
//# sourceMappingURL=pets.service.js.map