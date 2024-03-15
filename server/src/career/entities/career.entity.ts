import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CareerDocument = HydratedDocument<Career>;

@Schema({timestamps: true})
export class Career {
    @Prop({required: true, unique: true})
    CareerId: string;

    @Prop({required: true})
    Name: string;
}
export const CareerSchema = SchemaFactory.createForClass(Career);
