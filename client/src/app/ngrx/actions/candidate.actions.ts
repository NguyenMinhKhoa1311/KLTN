import { createAction, props } from "@ngrx/store";
import { Candidate } from "../../models/candidate.model";

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

export const createCandidateAtCreateProfile = createAction(
    "[Candidate] Create Candidate At Register",
    props<{candidate: any}>()
    );

export const createCandidateAtCreateProfileSuccess = createAction(
    "[Candidate] Create Candidate At Register Success",
    );

export const createCandidateAtCreateProfileFailure = createAction(
    "[Candidate] Create Candidate At Register Failure",
    props<{error: string}>()
    );

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
