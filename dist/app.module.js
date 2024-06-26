"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const clients_module_1 = require("./clients/clients.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("./config");
const pets_module_1 = require("./pets/pets.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_auth_guard_1 = require("./auth/jwt/jwt-auth.guard");
const core_1 = require("@nestjs/core");
const pass = encodeURIComponent(config_1.config.app.MONGODB_PASS);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            clients_module_1.ClientsModule,
            pets_module_1.PetsModule,
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://henrique:${pass}@cluster0.mzxpyql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard
            }
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map