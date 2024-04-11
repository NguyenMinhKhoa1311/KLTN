import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SkillDocument = HydratedDocument<Skill>

@Schema({timestamps: true})
export class Skill {
    @Prop({required: true, unique: true})
    skillId: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    level: number;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
