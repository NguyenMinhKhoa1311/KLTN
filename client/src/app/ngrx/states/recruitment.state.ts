import { Recruitment } from "../../models/recruitment.model";

export interface RecruitmentState {
    isGetByRecruiterLoading: boolean;
    isGetByRecruiterSuccess: boolean;
    getByRecruiterError: string;
    recruitmentsTakenByRecruiter: Recruitment[];

    isUpdateStatusSeenLoading: boolean;
    isUpdateStatusSeenSuccess: boolean;
    updateStatusSeenError: string;
    recruitmentUpdatedStatusSeen: Recruitment;

    isUpdateStatusLoading: boolean;
    isUpdateStatusSuccess: boolean;
    updateStatusError: string;
    recruitmentUpdatedStatus: Recruitment;

    isGetByCandidateLoading: boolean;
    isGetByCandidateSuccess: boolean;
    getByCandidateError: string;
    recruitmentsTakenByCandidate: Recruitment[];

    isUpdateDateInterviewLoading: boolean;
    isUpdateDateInterviewSuccess: boolean;
    updateDateInterviewError: string;
    recruitmentUpdatedDateInterview: Recruitment;
    
    isUpdateStatusCancelAtApplyJobLoading: boolean;
    isUpdateStatusCancelAtApplyJobSuccess: boolean;
    updateStatusCancelAtApplyJobError: string;

}