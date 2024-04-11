import { createAction, props } from "@ngrx/store";
import { Candidate } from "../../models/candidate.model";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUserWithGoogleAtLogin = createAction(
    "[Candidate] Get By User With Google At Login",
    props<{ user: string}>(), 
    );

export const getByUserWithGoogleAtLoginSuccess = createAction(
    "[Candidate] Get By User With Google At Login Success",
    props<{candidate: Candidate}>()
    );

export const getByUserWithGoogleAtLoginFailure = createAction(
    "[Candidate] Get By User With Google At Login Failure",
    props<{error: string}>()
    );





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createCandidateAtCreateProfile = createAction(
    "[Candidate] Create Candidate At Register",
    props<{candidate: any}>()
    );

export const createCandidateAtCreateProfileSuccess = createAction(
    "[Candidate] Create Candidate At Register Success",
    props<{candidate: Candidate}>()
    );

export const createCandidateAtCreateProfileFailure = createAction(
    "[Candidate] Create Candidate At Register Failure",
    props<{error: string}>()
    );






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUserWithGoogleAtRegister = createAction(
    "[Candidate] Get By User With Google At Register",
    props<{user: string}>()
    );

export const getByUserWithGoogleAtRegisterSuccess = createAction(
    "[Candidate] Get By User With Google At Register Success",
    props<{candidate: Candidate}>()
    );
export const getByUserWithGoogleAtRegisterFailure = createAction(
    "[Candidate] Get By User With Google At Register Failure",
    props<{error: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateEducationAtProfile = createAction(
    "[Candidate] Update Education",
    props<{education: any, id:string}>()
    );
export const updateEducationAtProfileSuccess = createAction(
    "[Candidate] Update Education Success",
    props<{candidate: Candidate}>()
    );
export const updateEducationAtProfileFailure = createAction(
    "[Candidate] Update Education Failure",
    props<{error: string}>()
    );






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateWorkExperienceAtProfile = createAction(
    "[Candidate] Update Work Experience",
    props<{workExperience: any, id:string}>()
    );
export const updateWorkExperienceAtProfileSuccess = createAction(
    "[Candidate] Update Work Experience Success",
    props<{candidate: Candidate}>()
    );
export const updateWorkExperienceAtProfileFailure = createAction(
    "[Candidate] Update Work Experience Failure",
    props<{error: string}>()
    );






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateLanguageAtProfile = createAction(
    "[Candidate] Update Language",
    props<{language: string, id:string}>()
    );

export const updateLanguageAtProfileSuccess = createAction(
    "[Candidate] Update Language Success",
    props<{candidate: Candidate}>()
    );
export const updateLanguageAtProfileFailure = createAction(
    "[Candidate] Update Language Failure",
    props<{error: string}>()
    );







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateDesiredJobAtProfile = createAction(
    "[Candidate] Update Desired Job",
    props<{desiredJob: any, id:string}>()
    );
export const updateDesiredJobAtProfileSuccess = createAction(
    "[Candidate] Update Desired Job Success",
    props<{candidate: Candidate}>()
    );
export const updateDesiredJobAtProfileFailure = createAction(
    "[Candidate] Update Desired Job Failure",
    props<{error: string}>()
    );



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateSkillAtProfile = createAction(
    "[Candidate] Update Skill",
    props<{skill: string, id:string}>()
    );
export const updateSkillAtProfileSuccess = createAction(
    "[Candidate] Update Skill Success",
    props<{candidate: Candidate}>()
    );
export const updateSkillAtProfileFailure = createAction(
    "[Candidate] Update Skill Failure",
    props<{error: string}>()
    );









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateAvatarAtProfile = createAction(
    "[Candidate] Update Avatar",
    props<{id:string, storage: any}>()
    );
export const updateAvatarAtProfileSuccess = createAction(
    "[Candidate] Update Avatar Success",
    props<{candidate: Candidate}>()
    );
export const updateAvatarAtProfileFailure = createAction(
    "[Candidate] Update Avatar Failure",
    props<{error: string}>()
    );







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateBasicInfoAtProfile = createAction(
    "[Candidate] Update Basic Info",
    props<{basicInfo: any, id:string}>()
    );

export const updateBasicInfoAtProfileSuccess = createAction(
    "[Candidate] Update Basic Info Success",
    props<{candidate: Candidate}>()
    );
export const updateBasicInfoAtProfileFailure = createAction(
    "[Candidate] Update Basic Info Failure",
    props<{error: string}>()
    );







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateOneOfEducationAtProfile = createAction(
    "[Candidate] Update One Of Education",
    props<{education: any, id:string}>()
    );
export const updateOneOfEducationAtProfileSuccess = createAction(
    "[Candidate] Update One Of Education Success",
    props<{candidate: Candidate}>()
    );
export const updateOneOfEducationAtProfileFailure = createAction(
    "[Candidate] Update One Of Education Failure",
    props<{error: string}>()
    );







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateOneOfWorkExperienceAtProfile = createAction(
    "[Candidate] Update One Of Work Experience",
    props<{workExperience: any, id:string}>()
    );
export const updateOneOfWorkExperienceAtProfileSuccess = createAction(
    "[Candidate] Update One Of Work Experience Success",
    props<{candidate: Candidate}>()
    );
export const updateOneOfWorkExperienceAtProfileFailure = createAction(
    "[Candidate] Update One Of Work Experience Failure",
    props<{error: string}>()
    );
    






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteWorkExperienceAtProfile = createAction(
    "[Candidate] Delete Work Experience",
    props<{id: string, workExperience: string}>()
    );
export const deleteWorkExperienceAtProfileSuccess = createAction(
    "[Candidate] Delete Work Experience Success",
    props<{candidate: Candidate}>()
    );
export const deleteWorkExperienceAtProfileFailure = createAction(
    "[Candidate] Delete Work Experience Failure",
    props<{error: string}>()
    );





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteEducationAtProfile = createAction(
    "[Candidate] Delete Education",
    props<{id: string, education: string}>()
    );
export const deleteEducationAtProfileSuccess = createAction(
    "[Candidate] Delete Education Success",
    props<{candidate: Candidate}>()
    );
export const deleteEducationAtProfileFailure = createAction(
    "[Candidate] Delete Education Failure",
    props<{error: string}>()
    );





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteLanguageAtProfile = createAction(
    "[Candidate] Delete Language",
    props<{id: string, language: string}>()
    );
export const deleteLanguageAtProfileSuccess = createAction(
    "[Candidate] Delete Language Success",
    props<{candidate: Candidate}>()
    );
export const deleteLanguageAtProfileFailure = createAction(
    "[Candidate] Delete Language Failure",
    props<{error: string}>()
    );








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteSkillAtProfile = createAction(
    "[Candidate] Delete Skill",
    props<{id: string, skill: string}>()
    );
export const deleteSkillAtProfileSuccess = createAction(
    "[Candidate] Delete Skill Success",
    props<{candidate: Candidate}>()
    );
export const deleteSkillAtProfileFailure = createAction(
    "[Candidate] Delete Skill Failure",
    props<{error: string}>()
    );







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetState = createAction(
    "[Candidate] Reset State"
    );