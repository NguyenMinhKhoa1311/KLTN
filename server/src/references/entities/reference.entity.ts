import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReferenceDocument = HydratedDocument<Reference>

@Schema({timestamps: true})
export class Reference {
    @Prop({required: true, unique: true})
    ReferenceId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Email: string;

    @Prop({required: true})
    Phone: string;

    @Prop({required: true})
    Company: string;

    @Prop({required: true})
    Position: string;

}

export const ReferencesSchema = SchemaFactory.createForClass(Reference);


