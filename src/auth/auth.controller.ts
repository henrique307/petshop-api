import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LogInUserDTO } from './user.dto/create-user.dto';
import { Public } from 'src/decorators/public.decorator';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Public()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiBody({ type: [CreateUserDTO], description: "user infos" })
    @ApiOperation({ description: "register a user in the database for future logins, you need to have a registration in order to get a bearer token and use the routes" })
    @ApiResponse({ status: HttpStatus.CREATED, description: "successfully registered the user in the database" })
    @Post('register')
    resgister(@Body() body: CreateUserDTO) {
        return this.authService.register(body);
    }
    
    @ApiBody({ type: [LogInUserDTO], description: "user infos" })
    @ApiOperation({ description: "regiter yourself, so you can login first" })
    @ApiResponse({ status: HttpStatus.OK, description: "successfully loged in" })
    @Post('login')
    login(@Body() loginBody: LogInUserDTO) {
        return this.authService.login(loginBody);
    }
}
