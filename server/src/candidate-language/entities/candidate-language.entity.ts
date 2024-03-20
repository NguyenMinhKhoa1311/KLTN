import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CandidateLanguageDocument = HydratedDocument<CandidateLanguage>;

@Schema({timestamps: true})
export class CandidateLanguage {
    @Prop({ required: true, unique: true })
    CandidateLanguageId: string;

    @Prop({ 
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
     })
    Language: string;

    @Prop({ required: true })
    Proficiency: number;
}
export const CandidateLanguageSchema = SchemaFactory.createForClass(CandidateLanguage);
