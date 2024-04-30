import { Candidate } from "./candidate.model";
import { Career } from "./career.model";
import { Company } from "./company.model";
import { Field } from "./field.model";
import { Job } from "./job.model";
import { Recruiter } from "./recruiter.model";
import { Storage } from "./storage.model";


export interface Recruitment{
    _id: string;
    RecruitmentId: string,
    Job: Job,
    Candidate: Candidate,
    Recruiter: Recruiter,
    Company: Company,
    Status: boolean,
    StatusSeenOfRecruiter: boolean,
    StatusCancel: boolean,
    DateApply: Date,
    Career: Career,
    Field: Field,
    DateInterview: Date,
    createAt: Date;
    updateAt: Date;
    CV: string;
    StorageCV: Storage;
}