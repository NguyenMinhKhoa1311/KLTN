import { Ban } from "../../models/ban.model";

export interface BanState{
    isBanUserAtManageCandidateLoading: boolean;
    isBanUserAtManageCandidateSuccess: boolean;
    banUserAtManageCandidateError: string;

    isUnBanUserAtManageCandidateLoading: boolean;
    isUnBanUserAtManageCandidateSuccess: boolean;
    unBanUserAtManageCandidateError: string;

    isBanUserAtManageRecruiterLoading: boolean;
    isBanUserAtManageRecruiterSuccess: boolean;
    banUserAtManageRecruiterError: string;

    unBanUserAtManageRecruiterLoading: boolean;
    unBanUserAtManageRecruiterSuccess: boolean;
    unBanUserAtManageRecruiterError: string;

    isGetBanByCandidateAtManageCandidateLoading: boolean;
    isGetBanByCandidateAtManageCandidateSuccess: boolean;
    getBanByCandidateAtManageCandidateError: string;
    banTakenByCandidateAtManagementCandidate: Ban;

    isGetBanByRecruiterAtManageRecruiterLoading: boolean;
    isGetBanByRecruiterAtManageRecruiterSuccess: boolean;
    getBanByRecruiterAtManageRecruiterError: string;
    banTakenByRecruiterAtManageRecruiter: Ban;

}