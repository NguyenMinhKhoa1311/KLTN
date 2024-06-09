import { createAction, props } from "@ngrx/store";

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
    