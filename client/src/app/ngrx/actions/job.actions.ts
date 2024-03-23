import { createAction, props } from "@ngrx/store";
import { Job } from "../../models/job.model";

export const getByFieldAtHome = createAction(
    '[Job] Get By Field At Home',
    props<{ field: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);

export const getByFieldAtHomeSuccess = createAction(
    '[Job] Get By Field At Home Success',
    props<{ jobs: Job }>()
);

export const getByFieldAtHomeFailure = createAction(
    '[Job] Get By Field At Home Failure',
    props<{ error: string }>()
);

export const getByCareerAtHome = createAction(
    '[Job] Get By Career At Home',
    props<{ career: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);

export const getByCareerAtHomeSuccess = createAction(
    '[Job] Get By Career At Home Success',
    props<{ jobs: Job }>()
);

export const getByCareerAtHomeFailure = createAction(
    '[Job] Get By Career At Home Failure',
    props<{ error: string }>()
);