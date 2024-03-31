import { Skill } from "../../models/skill.model";

export interface SkillState{
    skillsTakenByGetAllAtCreateCandidate: Skill[];
    isGetAllAtCreateCandidateLoading: boolean;
    isGetAllAtCreateCandidateSuccess: boolean;
    getAllAtCreateCandidateError: string;

}