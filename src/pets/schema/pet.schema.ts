import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongodb";
import mongoose, { Schema as MongooseSchema, HydratedDocument, Document } from "mongoose";
import { Client } from "src/clients/schema/client.schema";

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet extends Document {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    age: number;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Client' })
    @ApiProperty()
    owner: Client;
}

export const PetSchema = SchemaFactory.createForClass(Pet);

export const PetsModel = mongoose.model('Pet', PetSchema)