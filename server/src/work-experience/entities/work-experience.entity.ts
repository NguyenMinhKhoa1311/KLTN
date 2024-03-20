import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WorkExperienceDocument = HydratedDocument<WorkExperience>;

@Schema({timestamps: true})
export class WorkExperience {
    @Prop({required: true, unique: true})
    WorkExperienceId: string;

    @Prop({required: true})
    CompanyName: string;

    @Prop({required: true})
    JobTitle: string;

    @Prop({required: true})
    StartDate: Date;

    @Prop({required: true})
    EndDate: Date;

    @Prop({required: true})
    Description: string;
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);
