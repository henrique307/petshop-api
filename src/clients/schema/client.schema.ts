import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument, Document, Schema as MongooseSchema } from "mongoose";
import { Pet } from "src/pets/schema/pet.schema";

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client extends Document {
    @ApiProperty({
        description: "client name (special characters not alowed)",
        type: String
    })
    @Prop()
    name: string;
    
    @ApiProperty({
        description: "client phone number",
        type: String
    })
    @Prop()
    phone: string;
    
    @ApiProperty({
        description: "client email",
        type: String
    })
    @Prop()
    email: string;
    
    @ApiProperty({
        description: "client registered pets",
        type: String
    })
    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Pet' }] })
    pets: Pet[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);

export const ClientModel = mongoose.model('Client', ClientSchema);