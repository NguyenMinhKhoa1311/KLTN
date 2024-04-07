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








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetState = createAction(
    "[Candidate] Reset State"
    );