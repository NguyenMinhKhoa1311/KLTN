import { createAction, props } from "@ngrx/store";
import { Recruitment } from "../../models/recruitment.model";

export const getByRecruiterAtAplicationList = createAction(
    '[Recruitment] Get By Recruiter At Aplication List',
    props<{recruiter: string,  page: number, limit: number, sortBy: string, sortOrder: string }>(),
);
export const getByRecruiterAtAplicationListSuccess = createAction(
    '[Recruitment] Get By Recruiter At Aplication List Success',
    props<{recruitments: Recruitment[]}>(),
);
export const getByRecruiterAtAplicationListFailure = createAction(
    '[Recruitment] Get By Recruiter At Aplication List Failure',
    props<{error: string}>(),
);





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateStatusSeenAtAplicationList = createAction(
    '[Recruitment] Update Status Seen At Aplication List',
    props<{recruiter: string, status: boolean}>(),
);
export const updateStatusSeenAtAplicationListSuccess = createAction(
    '[Recruitment] Update Status Seen At Aplication List Success',
);
export const updateStatusSeenAtAplicationListFailure = createAction(
    '[Recruitment] Update Status Seen At Aplication List Failure',
    props<{error: string}>(),
);







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateStatusAtAplicationList = createAction(
    '[Recruitment] Update Status At Aplication List',
    props<{recruiter: string, status: boolean}>(),
);
export const updateStatusAtAplicationListSuccess = createAction(
    '[Recruitment] Update Status At Aplication List Success',
);
export const updateStatusAtAplicationListFailure = createAction(
    '[Recruitment] Update Status At Aplication List Failure',
    props<{error: string}>(),
);