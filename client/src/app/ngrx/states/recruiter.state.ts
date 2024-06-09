import { Recruiter } from "../../models/recruiter.model";

export interface RecruiterState{
    isGetByUserAtLoginLoading: boolean;
    isGetByUserAtLoginSuccess: boolean;
    getByUserAtLoginError: string;
    recruiterTakenByUserAtLogin: Recruiter;

    isGetByUserAtRegisterSuccess: boolean;
    isGetByUserAtRegisterLoading: boolean;
    getByUserAtRegisterError: string;
    recruiterTakenByUserAtRegister: Recruiter;

    isCreateRecruiterAtRegisterLoading: boolean;
    isCreateRecruiterAtRegisterSuccess: boolean;
    createRecruiterAtRegisterError: string;
    recruiterCreatedAtRegister: Recruiter;

    isGetAllAtManageRecruiterLoading: boolean;
    isGetAllAtManageRecruiterSuccess: boolean;
    getAllAtManageRecruiterError: string;   
    recruiters: Recruiter[];
}