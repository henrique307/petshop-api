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
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const create_pet_dto_1 = require("./pets.dto/create-pet.dto");
const update_pet_dto_1 = require("./pets.dto/update-pet.dto");
const swagger_1 = require("@nestjs/swagger");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    create(createPetDto) {
        return this.petsService.create(createPetDto);
    }
    findAll(query) {
        return this.petsService.findAll(query);
    }
    findOne(id) {
        return this.petsService.findOne(id);
    }
    update(id, updatePetDto) {
        return this.petsService.update(id, updatePetDto);
    }
    remove(id) {
        return this.petsService.remove(id);
    }
};
exports.PetsController = PetsController;
__decorate([
    (0, swagger_1.ApiBody)({ type: create_pet_dto_1.CreatePetDto, description: "pets infos" }),
    (0, swagger_1.ApiOperation)({ description: "register a pet in the database" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: "successfully registered the pet in the database" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_dto_1.CreatePetDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Fetch all the pets in the database, you can use queries to fetch all pets using characters that maybe be contained in a certain key (you cannot use the id of the pet)" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "returns data" }),
    (0, swagger_1.ApiQuery)({ name: 'name', type: String, required: false, description: 'Filter pets by name' }),
    (0, swagger_1.ApiQuery)({ name: 'age', type: Number, required: false, description: 'Filter pets by age' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Fetch a specific pet from the database using its id" }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Pet ID', required: true }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Updates a specific pet from the database using its id" }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Pet ID', required: true }),
    (0, swagger_1.ApiBody)({ type: update_pet_dto_1.UpdatePetDto }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_dto_1.UpdatePetDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Deletes a specific pet from the database using its id" }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Pet ID', required: true }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "remove", null);
exports.PetsController = PetsController = __decorate([
    (0, swagger_1.ApiTags)('Pets'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
//# sourceMappingURL=pets.controller.js.map