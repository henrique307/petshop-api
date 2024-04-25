import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches } from "class-validator";

export class CreateClientDto {
    @Matches(/^[a-zA-Z\ ]+$/, { message: "$property can't contain any special characters" })
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "client name"})
    name: string;
    
    @IsPhoneNumber('BR')
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "client phone number"})
    phone: string;
    
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "client email"})
    email: string
}
