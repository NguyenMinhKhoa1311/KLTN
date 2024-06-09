import { Candidate } from "./candidate.model";
import { Recruiter } from "./recruiter.model";

export interface Ban {
    _id: string;
    Reason: string;
    Candidate: Candidate;
    Recruiter: Recruiter;
    createdAt: Date;
    updatedAt: Date;
}
