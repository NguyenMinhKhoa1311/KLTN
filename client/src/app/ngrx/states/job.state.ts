import { Job } from "../../models/job.model";

export interface jobState{
    jobTakenByFieldAtHome: Job[];
    isGetByFieldAtHomeLoading: boolean;
    isGetByFieldAtHomeSuccess: boolean;
    getByFieldAtHomeError: string;
    

    jobTakenByCareerAtHome: Job[];
    isGetByCareerAtHomeLoading: boolean;
    isGetByCareerAtHomeSuccess: boolean;
    getByCareerAtHomeError: string;
}