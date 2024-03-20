import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LanguageDocument = HydratedDocument<Language>;

@Schema({timestamps: true})
export class Language {
    @Prop({ required: true, unique: true})
    LanguageId: string;

    @Prop({required: true})
    Name: string;
}

export const LanguageSchema =SchemaFactory.createForClass(Language);
