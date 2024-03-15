import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;
@Schema({timestamps: true})
export class User {
    @Prop({required: true, unique: true})
    Uid: string;

    @Prop({required: true})
    Username: string;

    @Prop({required: true})
    Password: string; 
}
export const UserSchema = SchemaFactory.createForClass(User);
