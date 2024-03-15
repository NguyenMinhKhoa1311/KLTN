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
    field: string;

    @Prop({required: true})
    EndDate: Date;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServicePackage',
        required: true
    })
    ServicePackage: string;

    @Prop({required: true})
    Status: boolean;

}

export const JobSchema = SchemaFactory.createForClass(Job);
