import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type RecruitmentDocument = HydratedDocument<Recruitment>;


@Schema({timestamps: true})
export class Recruitment {
    @Prop({required: true, unique: true})
    RecruitmentId: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"Job"
    })
    Job: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"Candidate"
    })
    Candidate: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"Recruiter"
    })
    Recruiter: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"Company"
    })
    Company: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Career"})
    Career: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Field"
    })
    Field: string;

    @Prop({required: true})
    StatusSeenOfRecruiter: boolean;

    @Prop({required: true})
    Status: boolean;

    @Prop({required: true})
    DateApply: Date;

    @Prop()
    DateInterview: Date;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Storage"
    })
    StorageCV: string;

    @Prop({required: true})
    CV: string;

}

export const RecruitmentSchema = SchemaFactory.createForClass(Recruitment);
