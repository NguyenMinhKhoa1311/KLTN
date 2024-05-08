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
    props<{recruitment: string, status: boolean}>(),
);
export const updateStatusSeenAtAplicationListSuccess = createAction(
    '[Recruitment] Update Status Seen At Aplication List Success',
    props<{recruitment:Recruitment}>(),
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
    props<{recruitment:Recruitment}>(),
);
export const updateStatusAtAplicationListFailure = createAction(
    '[Recruitment] Update Status At Aplication List Failure',
    props<{error: string}>(),
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCandidasteAtAplicationListOfCandidate = createAction(
    '[Recruitment] Get By Candidate At Aplication List Of Candidate',
    props<{candidate: string,   page: number, limit: number, sortBy: string, sortOrder: string}>(),
);
export const getByCandidasteAtAplicationListOfCandidateSuccess = createAction(
    '[Recruitment] Get By Candidate At Aplication List Of Candidate Success',
    props<{recruitments: Recruitment[]}>(),
);
export const getByCandidasteAtAplicationListOfCandidateFailure = createAction(
    '[Recruitment] Get By Candidate At Aplication List Of Candidate Failure',
    props<{error: string}>(),
);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateDateInterviewAtAplicationList = createAction(
    '[Recruitment] Update Date Interview At Aplication List',
    props<{id: string, date: string}>(),
);
export const updateDateInterviewAtAplicationListSuccess = createAction(
    '[Recruitment] Update Date Interview At Aplication List Success',
    props<{recruitment:Recruitment}>(),
);
export const updateDateInterviewAtAplicationListFailure = createAction(
    '[Recruitment] Update Date Interview At Aplication List Failure',
    props<{error: string}>(),
);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateStatusCancelAtApplyJob = createAction(
    '[Recruitment] Update Status Cancel At Apply Job',
    props<{id: string, status: boolean}>(),
);
export const updateStatusCancelAtApplyJobSuccess = createAction(
    '[Recruitment] Update Status Cancel Success At Apply Job',
    props<{recruitment:Recruitment}>(),
);
export const updateStatusCancelAtApplyJobFailure = createAction(
    '[Recruitment] Update Status Cancel Failure At Apply Job',
    props<{error: string}>(),
);



