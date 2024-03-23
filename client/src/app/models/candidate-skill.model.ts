import { Skill } from "./skill.model";

export interface CandidateSkill{
    _id: string;
     CandidateSkillId: string,
     Skill: Skill,
     Proficiency: string,
    createAt: Date;
    updateAt: Date;
}