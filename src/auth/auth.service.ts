import { BadRequestException, ConflictException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO, LogInUserDTO } from './user.dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userModel: typeof UserModel,
        private readonly jwtService: JwtService
    ) { }

    async login(loginDTO: LogInUserDTO) {
        const user = await this.userModel.findOne({ email: loginDTO.email });

        if (!user) throw new UnauthorizedException();

        const passwordComparisson = bcrypt.compare(loginDTO.password, user.password);

        if (passwordComparisson) {
            return { access_token: this.jwtService.sign({ username: user.email, sub: user._id }) }
        };
    }

    async register(createUserDTO: CreateUserDTO) {
        const userAlreadyExist = !!(await this.userModel.findOne({ email: createUserDTO.email }));

        if (userAlreadyExist) throw new ConflictException("User already exist");
        if (createUserDTO.password !== createUserDTO.confirmPassword) throw new BadRequestException("Passwords do not match");

        const salt = await bcrypt.genSalt()

        const newUser = new this.userModel({ ...createUserDTO, password: await bcrypt.hash(createUserDTO.password, salt) });

        newUser.save();

        return { message: "Usuário registrado com sucesso!", status: HttpStatus.CREATED };
    }
}
