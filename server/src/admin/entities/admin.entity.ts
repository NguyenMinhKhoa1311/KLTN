import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type adminDocument = HydratedDocument<Admin>;

@Schema({timestamps: true})
export class Admin {
    @Prop({required: true, unique: true})
    AdminId: string;

    @Prop({required: true})
    Name: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    })
    User: mongoose.Schema.Types.ObjectId;

    @Prop({required: true})
    StatusConfirm: boolean;

    @Prop({required: true})
    Phone: string;

    @Prop({required: true})
    Address: string;


}

export const AdminSchema = SchemaFactory.createForClass(Admin);