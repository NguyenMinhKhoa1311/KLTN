import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReferenceDocument = HydratedDocument<Reference>

@Schema({timestamps: true})
export class Reference {
    @Prop({required: true, unique: true})
    referenceId: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    company: string;

    @Prop({required: true})
    position: string;

}

export const ReferencesSchema = SchemaFactory.createForClass(Reference);


