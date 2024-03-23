import { Candidate } from "../../models/candidate.model";

export interface candidateState{
    isCreateCandidateWithGoogleAtLoginLoading: boolean;
    isCreateCandidateWithGoogleAtLoginSuccess: boolean;
    createCandidateWithGoogleAtLoginError: string;

    isGetByUserWithGoogleAtLoginLoading: boolean;
    isGetByUserWithGoogleAtLoginSuccess: boolean;
    getByUserWithGoogleAtLoginError: string;
    candidateTakenByUserWithGoogleAtLogin: Candidate;
}