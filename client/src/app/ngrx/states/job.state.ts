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

    jobTakenByHotJobAtHome: Job[];
    isGetByHotJobAtHomeLoading: boolean;
    isGetByHotJobAtHomeSuccess: boolean;
    getByHotJobAtHomeError: string;

    JobTakenBygetAllAndSortAtJob: Job[];
    isGetAllAndSortAtJobLoading: boolean;
    isGetAllAndSortAtJobSuccess: boolean;
    getAllAndSortAtJobError: string;

    JobTakenByFieldNameAtJob: Job[];
    isGetByFieldNameAtJobLoading: boolean;
    isGetByFieldNameAtJobSuccess: boolean;
    getByFieldNameAtJobError: string;

    JobTakenByCareerNameAtJob: Job[];
    isGetByCareerNameAtJobLoading: boolean;
    isGetByCareerNameAtJobSuccess: boolean;
    getByCareerNameAtJobError: string;

    isCreateJobAtCreateJobSuccess: boolean;
    isCreateJobAtCreateJobLoading: boolean;
    createJobAtCreateJobError: string;

    isUpdateJobAtJobDetailSuccess: boolean;
    isUpdateJobAtJobDetailLoading: boolean;
    updateJobAtUJobDetailError: string;
    jobUpdatedAtJobDetail: Job

    isGetByRecruiterAtJobDetailSuccess: boolean;
    isGetByRecruiterAtJobDetailLoading: boolean;
    getByRecruiterAtJobDetailError: string;
    jobsTakenByRecruiterAtJobDetail: Job[];

    isGetByLocationAtJobLoading: boolean;
    isGetByLocationAtJobSuccess: boolean;
    getByLocationAtJobError: string;
    jobsTakenByLocationAtJob: Job[];



}