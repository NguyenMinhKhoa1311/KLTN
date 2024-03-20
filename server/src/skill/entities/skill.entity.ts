import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type  SkillDocument = HydratedDocument<Skill>;

@Schema({timestamps: true})
export class Skill {
    @Prop({required: true, unique: true})
    SkillId: string;

    @Prop({required: true})
    Name: string;

}

export const SkillSchema = SchemaFactory.createForClass(Skill);
