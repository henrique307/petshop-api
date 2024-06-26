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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pet_dto_1 = require("./create-pet.dto");
const class_validator_1 = require("class-validator");
class UpdatePetDto extends (0, swagger_1.PartialType)(create_pet_dto_1.CreatePetDto) {
}
exports.UpdatePetDto = UpdatePetDto;
__decorate([
    (0, class_validator_1.Matches)(/[!@#$%^&*(),.?":{}|<>]/, { message: "$property can't contain any special characters" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: "pet name" }),
    __metadata("design:type", String)
], UpdatePetDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: "pet name" }),
    __metadata("design:type", Number)
], UpdatePetDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: "pet name" }),
    __metadata("design:type", String)
], UpdatePetDto.prototype, "owner", void 0);
//# sourceMappingURL=update-pet.dto.js.map