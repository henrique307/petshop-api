import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LogInUserDTO } from './user.dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    resgister(body: CreateUserDTO): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    login(loginBody: LogInUserDTO): Promise<{
        access_token: string;
    }>;
}
