import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";

export type JobDocument = HydratedDocument<Job>;

@Schema({timestamps: true})
export class Job {
    @Prop({required: true, unique: true})
    JobId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Description: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    })
    Company: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter'
    })
    Recruiter: string;
        
    @Prop({required: true})
    Location: string;

    @Prop({required: true})
    Salary: number;

    @Prop({
        required: true
    })
    Welfare: string[];


    @Prop({required: true})
    Career: string;


    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field',
        required: true
    })
    Field: string;

    @Prop({required: true})
    EndDate: Date;

    @Prop({required: true})
    StatusPayment: boolean;

    @Prop({required: true})
    StatusRecruitment: boolean;

    @Prop({required: true})
    Requirement: string;

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Tag'
    })
    Tags: [mongoose.Schema.Types.ObjectId];

    @Prop({required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServicePackage'
    })
    ServicePackage: string;

}

export const JobSchema = SchemaFactory.createForClass(Job);
