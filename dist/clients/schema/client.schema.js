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
exports.ClientModel = exports.ClientSchema = exports.Client = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let Client = class Client extends mongoose_2.Document {
};
exports.Client = Client;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "client name (special characters not alowed)",
        type: String
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "client phone number",
        type: String
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "client email",
        type: String
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "client registered pets",
        type: String
    }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Pet' }] }),
    __metadata("design:type", Array)
], Client.prototype, "pets", void 0);
exports.Client = Client = __decorate([
    (0, mongoose_1.Schema)()
], Client);
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(Client);
exports.ClientModel = mongoose_2.default.model('Client', exports.ClientSchema);
//# sourceMappingURL=client.schema.js.map