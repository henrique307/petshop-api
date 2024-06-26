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
exports.PetsModel = exports.PetSchema = exports.Pet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const client_schema_1 = require("../../clients/schema/client.schema");
let Pet = class Pet extends mongoose_2.Document {
};
exports.Pet = Pet;
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Pet.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Pet.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Client' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", client_schema_1.Client)
], Pet.prototype, "owner", void 0);
exports.Pet = Pet = __decorate([
    (0, mongoose_1.Schema)()
], Pet);
exports.PetSchema = mongoose_1.SchemaFactory.createForClass(Pet);
exports.PetsModel = mongoose_2.default.model('Pet', exports.PetSchema);
//# sourceMappingURL=pet.schema.js.map