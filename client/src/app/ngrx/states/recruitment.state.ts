import { Recruitment } from "../../models/recruitment.model";

export interface RecruitmentState {
    isGetByRecruiterLoading: boolean;
    isGetByRecruiterSuccess: boolean;
    getByRecruiterError: string;
    recruitmentsTakenByRecruiter: Recruitment[];

}