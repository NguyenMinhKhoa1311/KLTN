import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BanDocument = HydratedDocument<Ban>;

@Schema({timestamps: true})
export class Ban {
    @Prop({required: true, unique: true})
    BanId: string;

    @Prop({required: true})
    Reason: string;

    @Prop({required: true})
    Date: Date;

    @Prop({
        type: String,
        ref: 'Candidate',
    })
    Candidate: string;

    @Prop({
        type: String,
        ref: 'Recruiter',
    })
    Recruiter: string;
}



export const BanSchema = SchemaFactory.createForClass(Ban);