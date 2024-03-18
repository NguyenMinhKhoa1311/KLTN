import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TagDocument = HydratedDocument<Tag>;

@Schema({timestamps: true})
export class Tag {
    @Prop({required: true, unique: true})
    TagId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Quantity: number;
}
export const TagSchema = SchemaFactory.createForClass(Tag);