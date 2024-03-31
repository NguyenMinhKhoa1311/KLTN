import { Candidate } from "../../models/candidate.model";

export interface candidateState{
    isCreateCandidateWithGoogleAtLoginLoading: boolean;
    isCreateCandidateWithGoogleAtLoginSuccess: boolean;
    createCandidateWithGoogleAtLoginError: string;

    isGetByUserWithGoogleAtLoginLoading: boolean;
    isGetByUserWithGoogleAtLoginSuccess: boolean;
    getByUserWithGoogleAtLoginError: string;
    candidateTakenByUserWithGoogleAtLogin: Candidate;

    isCreateCandidateAtCreateProfileLoading: boolean;
    isCreateCandidateAtCreateProfileSuccess: boolean;
    createCandidateAtCreateProfileError: string;

    isGetByUserWithGoogleAtRegisterLoading: boolean;
    isGetByUserWithGoogleAtRegisterSuccess: boolean;
    getByUserWithGoogleAtRegisterError: string;
    candidateTakenByUserWithGoogleAtRegister: Candidate;

}