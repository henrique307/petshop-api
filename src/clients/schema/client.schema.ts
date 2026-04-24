import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument, Document, Schema as MongooseSchema, Types } from "mongoose";

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
    pets: Types.ObjectId[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);

export const ClientModel = mongoose.model('Client', ClientSchema);