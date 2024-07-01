import { createAction, props } from "@ngrx/store";
import { Ban } from "../../models/ban.model";

export const banUserAtManageCandidate = createAction(
    '[Ban] Ban User At Manage Candidate',
    props<{ban: any}>()
    );
export const banUserAtManageCandidateSuccess = createAction(
    '[Ban] Ban User Success At Manage Candidate',
    );
export const banUserAtManageCandidateFailure = createAction(
    '[Ban] Ban User Failure At Manage Candidate',
    props<{error: string}>()
    );


    //////////////////////////////////////////////////////////////////////////////////////////////////////
export const unBanUserAtManageCandidate = createAction(
    '[Ban] UnBan User At Manage Candidate',
    props<{ban: any}>()
    );
export const unBanUserAtManageCandidateSuccess = createAction(
    '[Ban] UnBan User Success At Manage Candidate',
    );
export const unBanUserAtManageCandidateFailure = createAction(
    '[Ban] UnBan User Failure At Manage Candidate',
    props<{error: string}>()
    );


    //////////////////////////////////////////////////////////////////////////////////////////////////////
export const banUserAtManageRecruiter = createAction(
    '[Ban] Ban User At Manage Recruiter',
    props<{ban: any}>()
    );
export const banUserAtManageRecruiterSuccess = createAction(
    '[Ban] Ban User Success At Manage Recruiter',
    );
export const banUserAtManageRecruiterFailure = createAction(
    '[Ban] Ban User Failure At Manage Recruiter',
    props<{error: string}>()
    );



    //////////////////////////////////////////////////////////////////////////////////////////////////////
export const unBanUserAtManageRecruiter = createAction(
    '[Ban] UnBan User At Manage Recruiter',
    props<{ban: any}>()
    );
export const unBanUserAtManageRecruiterSuccess = createAction(
    '[Ban] UnBan User Success At Manage Recruiter',
    );
export const unBanUserAtManageRecruiterFailure = createAction(
    '[Ban] UnBan User Failure At Manage Recruiter',
    props<{error: string}>()
    );
    

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCandidateAtManageCandidate = createAction(
    '[Ban] Get By Candidate At Manage Candidate',
    props<{candidate: string}>()
    );
export const getByCandidateAtManageCandidateSuccess = createAction(
    '[Ban] Get By Candidate Success At Manage Candidate',
    props<{ban: Ban}>()
    );
export const getByCandidateAtManageCandidateFailure = createAction(
    '[Ban] Get By Candidate Failure At Manage Candidate',
    props<{error: string}>()
    );

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByRecruiterAtManageRecruiter = createAction(
    '[Ban] Get By Recruiter At Manage Recruiter',
    props<{recruiter: string}>()
    );
export const getByRecruiterAtManageRecruiterSuccess = createAction(
    '[Ban] Get By Recruiter Success At Manage Recruiter',
    props<{ban: Ban}>()
    );
export const getByRecruiterAtManageRecruiterFailure = createAction(
    '[Ban] Get By Recruiter Failure At Manage Recruiter',
    props<{error: string}>()
    );