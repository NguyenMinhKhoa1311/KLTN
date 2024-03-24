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
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Recruitment'
    })
    Recruitment: [mongoose.Schema.Types.ObjectId];

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter'
    })
    Recruiter: string;
        
    @Prop({required: true})
    Location: string;

    @Prop({required: true})
    Salary: string;

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
    StartDate: Date;

    @Prop({required: true})
    EndDate: Date;

    @Prop({required: true})
    StatusPayment: boolean;

    @Prop({required: true})
    Requirement: string;

    @Prop({
        required: true,
    })
    Tags: string[];

    @Prop({required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServicePackage'
    })
    ServicePackage: string;

    @Prop({required: true})
    Priority: number;

    @Prop({required: true})
    Hot: boolean;

    @Prop({required: true})
    ColorTitle: boolean;

    @Prop({required: true})
    Urgent: boolean;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    })
    Company: string;

}

export const JobSchema = SchemaFactory.createForClass(Job);
