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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async login(loginDTO) {
        const user = await this.userModel.findOne({ email: loginDTO.email });
        if (!user)
            throw new common_1.UnauthorizedException();
        const passwordComparisson = bcrypt.compare(loginDTO.password, user.password);
        if (passwordComparisson) {
            return { access_token: this.jwtService.sign({ username: user.email, sub: user._id }) };
        }
        ;
    }
    async register(createUserDTO) {
        const userAlreadyExist = !!(await this.userModel.findOne({ email: createUserDTO.email }));
        if (userAlreadyExist)
            throw new common_1.ConflictException("User already exist");
        if (createUserDTO.password !== createUserDTO.confirmPassword)
            throw new common_1.BadRequestException("Passwords do not match");
        const salt = await bcrypt.genSalt();
        const newUser = new this.userModel({ ...createUserDTO, password: await bcrypt.hash(createUserDTO.password, salt) });
        newUser.save();
        return { message: "Usuário registrado com sucesso!", status: common_1.HttpStatus.CREATED };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map