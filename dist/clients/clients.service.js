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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const client_schema_1 = require("./schema/client.schema");
let ClientsService = class ClientsService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    create(createClientDto) {
        const client = new this.clientModel(createClientDto);
        return client.save();
    }
    findAll(query) {
        if (Object.keys(query).length === 0)
            return this.clientModel.find().exec();
        if (query._id)
            throw new common_1.BadRequestException({ message: "_id não pode ser usadno nesta rota para pesquisa, por favor utilize /clientes/:id" });
        const mongoQuery = [];
        for (const item in query) {
            mongoQuery.push({ [item]: { $regex: `${query[item]}`, $options: 'i' } });
        }
        return this.clientModel
            .find({ $and: mongoQuery })
            .exec();
    }
    async findOne(id) {
        const client = await (this.clientModel.findById(id).populate("pets"));
        if (!client)
            throw new common_1.NotFoundException("Client Id not foung in our database");
        const detaildClient = client.populate("pets");
        return detaildClient;
    }
    async update(id, updateClientDto) {
        const itemAlterado = await this.clientModel.updateOne({ _id: id }, updateClientDto);
        if (!itemAlterado.matchedCount)
            throw new common_1.NotFoundException("Client Id not found in our database");
        return itemAlterado;
    }
    async remove(id) {
        const itemDeletado = await this.clientModel.deleteOne({ _id: id });
        if (!itemDeletado.deletedCount)
            throw new common_1.NotFoundException("Client Id not found in our database");
        return itemDeletado;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [Object])
], ClientsService);
//# sourceMappingURL=clients.service.js.map