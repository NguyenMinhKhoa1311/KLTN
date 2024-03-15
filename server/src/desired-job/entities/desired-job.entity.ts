import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type DesiredJobDocument = HydratedDocument<DesiredJob>;

@Schema({timestamps: true})
export class DesiredJob {
    @Prop({required: true, unique: true})
    DesiredJobId: string;

    @Prop({required: true})
    Location: string;

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
    Salary: number;

}

export const DesiredJobSchema = SchemaFactory.createForClass(DesiredJob);