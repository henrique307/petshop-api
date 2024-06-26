"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.config = {
    app: {
        MONGODB_PASS: process.env.MONGODB_PASS,
        PORT: process.env.PORT,
        JWT_SECRET: process.env.JWT_SECRET
    }
};
//# sourceMappingURL=index.js.map