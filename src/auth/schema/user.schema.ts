import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument } from "mongoose";
import { Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User extends Document {
    @ApiProperty()
    @Prop()
    email: string;
    
    @Prop()
    @ApiProperty()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserModel = mongoose.model("User", UserSchema);