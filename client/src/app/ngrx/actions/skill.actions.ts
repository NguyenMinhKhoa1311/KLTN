import { createAction, props } from "@ngrx/store";
import { Skill } from "../../models/skill.model";

export const getAllAtCreateCandidate = createAction('[Skill] Get All At Create Candidate');

export const getAllAtCreateCandidateSuccess = createAction(
    '[Skill] Get All At Create Candidate Success',
    props<{skills: Skill[]}>()
    );

export const getAllAtCreateCandidateFailure = createAction(
    '[Skill] Get All At Create Candidate Failure',
    props<{error: string}>()
    );