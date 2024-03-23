import { Candidate } from "./candidate.model";
import { Job } from "./job.model";
import { Recruiter } from "./recruiter.model";

export interface Recruitment{
    _id: string;
     RecruitmentId: string,
     Job: Job,
     Candidate: Candidate,
     Recruiter: Recruiter,
     Status: boolean,
     DateApply: Date,
     DateInterview: Date,
    createAt: Date;
    updateAt: Date;
}