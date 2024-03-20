import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EducationDocument = HydratedDocument<Education>;

@Schema({timestamps: true})
export class Education {
    @Prop({required: true, unique: true})
    EducationId: string;

    @Prop({required: true})
    School: string;

    @Prop({required: true})
    Degree: string;

    @Prop({required: true})
    StartDate: Date;

    @Prop({required: true})
    EndDate: Date;

    @Prop({required: true})
    Major: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);