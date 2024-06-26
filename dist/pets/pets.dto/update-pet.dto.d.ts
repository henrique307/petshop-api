import { CreatePetDto } from './create-pet.dto';
declare const UpdatePetDto_base: import("@nestjs/common").Type<Partial<CreatePetDto>>;
export declare class UpdatePetDto extends UpdatePetDto_base {
    name: string;
    age: number;
    owner: string;
}
export {};
