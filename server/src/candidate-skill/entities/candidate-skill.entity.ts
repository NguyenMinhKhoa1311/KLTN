import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CandidateLanguageDocument = HydratedDocument<CandidateSkill>;

@Schema({timestamps: true})
export class CandidateSkill {
    @Prop({required: true, unique: true})
    CandidateSkillId: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
    })
    Skill: string;

    @Prop({required: true})
    Name: string;   

    @Prop({required: true})
    Proficiency: number;
}

export const CandidateSkillSchema = SchemaFactory.createForClass(CandidateSkill);

