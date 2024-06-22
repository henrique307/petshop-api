import { configDotenv } from "dotenv"

configDotenv()

export const config = {
    app: {
        MONGODB_PASS: process.env.MONGODB_PASS,
        PORT: process.env.PORT,
        JWT_SECRET: process.env.JWT_SECRET
    }
}