import { HttpStatus } from '@nestjs/common';
import { CreateUserDTO, LogInUserDTO } from './user.dto/create-user.dto';
import { UserModel } from './schema/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: typeof UserModel, jwtService: JwtService);
    login(loginDTO: LogInUserDTO): Promise<{
        access_token: string;
    }>;
    register(createUserDTO: CreateUserDTO): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
