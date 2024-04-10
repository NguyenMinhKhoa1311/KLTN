import { Candidate } from "../../models/candidate.model";

export interface candidateState{

    isGetByUserWithGoogleAtLoginLoading: boolean;
    isGetByUserWithGoogleAtLoginSuccess: boolean;
    getByUserWithGoogleAtLoginError: string;
    candidateTakenByUserWithGoogleAtLogin: Candidate;

    isCreateCandidateAtCreateProfileLoading: boolean;
    isCreateCandidateAtCreateProfileSuccess: boolean;
    createCandidateAtCreateProfileError: string;
    candidateCreatedAtCreateProfile: Candidate;

    isGetByUserWithGoogleAtRegisterLoading: boolean;
    isGetByUserWithGoogleAtRegisterSuccess: boolean;
    getByUserWithGoogleAtRegisterError: string;
    candidateTakenByUserWithGoogleAtRegister: Candidate;

    isUpdateEducationAtProfileLoading: boolean;
    isUpdateEducationAtProfileSuccess: boolean;
    updateEducationAtProfileError: string;
    candidateUpdatedEducationAtProfile: Candidate;

    isUpdateWorkExperienceAtProfileLoading: boolean;
    isUpdateWorkExperienceAtProfileSuccess: boolean;
    updateWorkExperienceAtProfileError: string;
    candidateUpdatedWorkExperienceAtProfile: Candidate;

    isUpdateLanguageAtProfileLoading: boolean;
    isUpdateLanguageAtProfileSuccess: boolean;
    updateLanguageAtProfileError: string;
    candidateUpdatedLanguageAtProfile: Candidate;


    isUpdateDesiredJobAtProfileLoading: boolean;
    isUpdateDesiredJobAtProfileSuccess: boolean;
    updateDesiredJobAtProfileError: string;
    candidateUpdatedDesiredJobAtProfile: Candidate;


    isUpdateSkillAtProfileLoading: boolean;
    isUpdateSkillAtProfileSuccess: boolean;
    updateSkillAtProfileError: string;
    candidateUpdatedSkillAtProfile: Candidate;

    isUpdateAvatarAtProfileLoading: boolean;
    isUpdateAvatarAtProfileSuccess: boolean;
    updateAvatarAtProfileError: string;
    candidateUpdatedAvatarAtProfile: Candidate;


    isUpdateBasicInfoAtProfileLoading: boolean;
    isUpdateBasicInfoAtProfileSuccess: boolean;
    updateBasicInfoAtProfileError: string;
    candidateUpdatedBasicInfoAtProfile: Candidate;




    isDeleteSkillAtProfileLoading: boolean;
    isDeleteSkillAtProfileSuccess: boolean;
    deleteSkillAtProfileError: string;
    candidateDeletedSkillAtProfile: Candidate;


    isDeleteLanguageAtProfileLoading: boolean;
    isDeleteLanguageAtProfileSuccess: boolean;
    deleteLanguageAtProfileError: string;
    candidateDeletedLanguageAtProfile: Candidate;



    isDeleteEducationAtProfileLoading: boolean;
    isDeleteEducationAtProfileSuccess: boolean;
    deleteEducationAtProfileError: string;
    candidateDeletedEducationAtProfile: Candidate;


    isDeleteWorkExperienceAtProfileLoading: boolean;
    isDeleteWorkExperienceAtProfileSuccess: boolean;
    deleteWorkExperienceAtProfileError: string;
    candidateDeletedWorkExperienceAtProfile: Candidate;


}