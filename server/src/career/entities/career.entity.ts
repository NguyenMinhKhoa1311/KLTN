import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CareerDocument = HydratedDocument<Career>;

@Schema({timestamps: true})
export class Career {
    @Prop({required: true, unique: true})
    CareerId: string;

    @Prop({required: true})
    Name: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:'Field'
    })
    Field: string;

    @Prop({required: true})
    quantity: number;
}
export const CareerSchema = SchemaFactory.createForClass(Career);
