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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("./user.dto/create-user.dto");
const public_decorator_1 = require("../decorators/public.decorator");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    resgister(body) {
        return this.authService.register(body);
    }
    login(loginBody) {
        return this.authService.login(loginBody);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDTO, description: "user infos" }),
    (0, swagger_1.ApiOperation)({ description: "register a user in the database for future logins, you need to have a registration in order to get a bearer token and use the routes" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: "successfully registered the user in the database" }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resgister", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.LogInUserDTO, description: "user infos" }),
    (0, swagger_1.ApiOperation)({ description: "regiter yourself, so you can login first" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "successfully loged in" }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.LogInUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map