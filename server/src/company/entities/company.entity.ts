import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CompanyDocument = HydratedDocument<Company>;

@Schema({timestamps: true})
export class Company {
    @Prop({required: true,unique: true})
    CompanyId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Email: string;

    @Prop({required: true})
    Phone: string;

    @Prop({required: true})
    Address: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field',
        required: true
    })
    Field: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Career',
        required: true
    })
    Career: string;

    @Prop({required: true})
    Avatar: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storage',
    })
    StorageAvatar: string;

    @Prop({required: true})
    Cover: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storage',
    })
    StorageCover: string;

    @Prop({required: true})
    JobQuantity: number;

}
export const CompanySchema = SchemaFactory.createForClass(Company);
