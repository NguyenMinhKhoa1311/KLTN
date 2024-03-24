import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FieldDocument = HydratedDocument<Field>;

@Schema({timestamps: true})
export class Field {
    @Prop({required: true, unique: true})
    FieldId: string;

    @Prop({required: true})
    FieldName: string;

    @Prop({required: true})
    quantity: number;
}
export const FieldSchema = SchemaFactory.createForClass(Field);