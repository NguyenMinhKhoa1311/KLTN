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
    
    isGetByIdAtJobDetailOfCandidateLoading: boolean;
    isGetByIdAtJobDetailOfCandidateSuccess: boolean;
    getByIdAtJobDetailOfCandidateError: string;
    jobTakenByIdAtJobDetailOfCandidate: Job;


    isGetByCompanyAtCompanyDetailLoading: boolean;
    isGetByCompanyAtCompanyDetailSuccess: boolean;
    getByCompanyAtCompanyDetailError: string;
    jobsTakenByCompanyAtCompanyDetail: Job[];
    

    isGetByFieldAtJobLoading: boolean;
    isGetByFieldAtJobSuccess: boolean;
    getByFieldAtJobError: string;
    jobsTakenByFieldAtJob: Job[];
    
    isGetByJobIdAtApplyJobLoading: boolean;
    isGetByJobIdAtApplyJobSuccess: boolean;
    getByJobIdAtApplyJobError: string;
    jobTakenByJobIdAtApplyJob: Job;

    isDeleteAtJobDetailfRecruiterLoading: boolean;
    isDeleteAtJobDetailfRecruiterSuccess: boolean;
    deleteAtJobDetailOfRecruiterError: string;

    
    isUpdateRecruitmentJobDetailLoading: boolean;
    isUpdateRecruitmentJobDetailSuccess: boolean;
    updateRecruitmentJobDetailError: string;    
    JobUpdatedRecruitment: Job;


}