import { Job } from "../../models/job.model";

export interface jobState{
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
    JobUpdatedRecruitmentAtJobDetail: Job;


    isGetByKeywordAtJobLoading: boolean;
    isGetByKeywordAtJobSuccess: boolean;
    getByKeywordAtJobError: string;
    jobsTakenByKeywordAtJob: Job[];

    isGetByTagAtJobLoading: boolean;
    isGetByTagAtJobSuccess: boolean;
    getByTagAtJobError: string;
    jobsTakenByTagAtJob: Job[];

    isGetByTagWithUrgentAtJobLoading: boolean;
    isGetByTagWithUrgentAtJobSuccess: boolean;
    getByTagWithUrgentAtJobError: string;
    jobsTakenByTagWithUrgentAtJob: Job[];


    isGetByKeywordWithUrgentAtJobLoading: boolean;
    isGetByKeywordWithUrgentAtJobSuccess: boolean;
    getByKeywordWithUrgentAtJobError: string;
    jobsTakenByKeywordWithUrgentAtJob: Job[];


    isGetByFieldNameWithUrgentAtJobLoading: boolean;
    isGetByFieldNameWithUrgentAtJobSuccess: boolean;
    getByFieldNameWithUrgentAtJobError: string;
    jobsTakenByFieldNameWithUrgentAtJob: Job[];


    isGetByCareerNameWithUrgentAtJobLoading: boolean;
    isGetByCareerNameWithUrgentAtJobSuccess: boolean;
    getByCareerNameWithUrgentAtJobError: string;
    jobsTakenByCareerNameWithUrgentAtJob: Job[];

    isGetByFieldWithUrgentAtJobLoading: boolean;
    isGetByFieldWithUrgentAtJobSuccess: boolean;
    getByFieldWithUrgentAtJobError: string;
    jobsTakenByFieldWithUrgentAtJob: Job[];


    isGetByLocationWithUrgentAtJobLoading: boolean;
    isGetByLocationWithUrgentAtJobSuccess: boolean;
    getByLocationWithUrgentAtJobError: string;
    jobsTakenByLocationWithUrgentAtJob: Job[];


    isGetAllAndSortWithUrgentAtJobLoading: boolean;
    isGetAllAndSortWithUrgentAtJobSuccess: boolean;
    getAllAndSortWithUrgentAtJobError: string;
    jobsTakenByAllAndSortWithUrgentAtJob: Job[];

    isGetAllAndSortByWelfareAndSalaryAtHomeLoading: boolean;
    isGetAllAndSortByWelfareAndSalaryAtHomeSuccess: boolean;
    getAllAndSortByWelfareAndSalaryAtHomeError: string;
    jobsTakenByAllAndSortByWelfareAndSalaryAtHome: Job[];


    isGetAllAndSortByWelfareAndSalaryAtSeeAllLoading: boolean;
    isGetAllAndSortByWelfareAndSalaryAtSeeAllSuccess: boolean;
    getAllAndSortByWelfareAndSalaryAtSeeAllError: string;
    jobsTakenByAllAndSortByWelfareAndSalaryAtSeeAll: Job[];


    isGetByHotJobAtSeeAllLoading: boolean;
    isGetByHotJobAtSeeAllSuccess: boolean;
    getByHotJobAtSeeAllError: string;
    jobsTakenByHotJobAtSeeAll: Job[];



}