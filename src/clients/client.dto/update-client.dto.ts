import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { Matches, IsNotEmpty, IsString, IsPhoneNumber, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @Matches(/[!@#$%^&*(),.?":{}|<>]/, { message: "não pode haver caracteres especiais na propriedade $property" })
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "client name" })
    name: string;

    @IsPhoneNumber('BR')
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "client phone number" })
    phone: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "client email" })
    email: string
}
