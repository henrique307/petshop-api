import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsMongoId, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class CreatePetDto {
    @Matches(/^[a-zA-Z\ ]+$/, { message: "$property can't contain any special characters" })
    @ApiProperty({ description: "pet name" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    @ApiProperty({ description: "pet age" })
    age: number;

    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "Pet ownerID" })
    owner: string;
}
