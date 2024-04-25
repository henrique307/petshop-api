import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePetDto } from './create-pet.dto';
import { Matches, IsNotEmpty, IsString, IsNumber, IsMongoId } from 'class-validator';

export class UpdatePetDto extends PartialType(CreatePetDto) {
    @Matches(/[!@#$%^&*(),.?":{}|<>]/, { message: "$property can't contain any special characters" })
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "pet name" })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ description: "pet name" })
    age: number;

    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "pet name" })
    owner: string;
}
