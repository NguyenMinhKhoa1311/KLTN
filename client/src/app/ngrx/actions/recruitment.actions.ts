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