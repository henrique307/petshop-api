import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsEmail()
    @ApiProperty({ description: "user email" })
    email: string;
    
    @IsStrongPassword()
    @IsString()
    @ApiProperty({ description: "user password" })
    password: string;
    
    @IsStrongPassword()
    @IsString()
    @ApiProperty({ description: "password confirmation" })
    confirmPassword: string;
}

export class LogInUserDTO {

    @IsString()
    @IsEmail()
    @ApiProperty({ description: "user email" })
    email: string;
    
    @IsStrongPassword()
    @IsString()
    @ApiProperty({ description: "user password" })
    password: string;
}