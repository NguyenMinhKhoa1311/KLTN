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

export const createCandidateWithGoogleAtLogin = createAction(
    "[Candidate] Create Candidate With Google At Login",
    props<{candidate: any}>()
    );

export const createCandidateWithGoogleAtLoginSuccess = createAction(
    "[Candidate] Create Candidate With Google At Login Success",
    );

export const createCandidateWithGoogleAtLoginFailure = createAction(
    "[Candidate] Create Candidate With Google At Login Failure",
    props<{error: string}>()
    );