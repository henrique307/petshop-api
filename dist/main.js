"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('PetShop API')
        .setDescription("API for an online pet shop with JWT auth and dinamic data validation, using MongoDB for database.")
        .setVersion('1.0')
        .addBearerAuth({
        description: "You need to login into /auth/login to get the bearer token",
        type: "http",
    })
        .addTag('Auth')
        .addTag('Pets')
        .addTag('Clients')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/swagger', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(config_1.config.app.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map