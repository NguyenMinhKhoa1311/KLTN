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
}