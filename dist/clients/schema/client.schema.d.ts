/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { HydratedDocument, Document } from "mongoose";
import { Pet } from "src/pets/schema/pet.schema";
export type ClientDocument = HydratedDocument<Client>;
export declare class Client extends Document {
    name: string;
    phone: string;
    email: string;
    pets: Pet[];
}
export declare const ClientSchema: mongoose.Schema<Client, mongoose.Model<Client, any, any, any, mongoose.Document<unknown, any, Client> & Client & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Client, mongoose.Document<unknown, {}, mongoose.FlatRecord<Client>> & mongoose.FlatRecord<Client> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const ClientModel: mongoose.Model<Client, {}, {}, {}, mongoose.Document<unknown, {}, Client> & Client & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<Client, mongoose.Model<Client, any, any, any, mongoose.Document<unknown, any, Client> & Client & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Client, mongoose.Document<unknown, {}, mongoose.FlatRecord<Client>> & mongoose.FlatRecord<Client> & {
    _id: mongoose.Types.ObjectId;
}>>;
