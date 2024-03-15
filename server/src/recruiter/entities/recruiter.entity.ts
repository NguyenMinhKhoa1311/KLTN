import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type RecruiterDocument = HydratedDocument<Recruiter>;
@Schema({timestamps: true})
export class Recruiter {
    @Prop({required: true,unique: true})
    RecruiterId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Email: string;

    @Prop({required: true})
    Phone: string;

    @Prop({required: true})
    Address: string;

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Voucher'
    })
    Voucher: [mongoose.Schema.Types.ObjectId];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    })
    Company: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    })
    User: string;
}
export const RecruiterSchema = SchemaFactory.createForClass(Recruiter);
