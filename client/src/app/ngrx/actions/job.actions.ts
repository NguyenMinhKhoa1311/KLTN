import { createAction, props } from "@ngrx/store";
import { Job } from "../../models/job.model";

export const getByFieldAtHome = createAction(
    '[Job] Get By Field At Home',
    props<{ field: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);

export const getByFieldAtHomeSuccess = createAction(
    '[Job] Get By Field At Home Success',
    props<{ jobs: Job[] }>()
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
    props<{ jobs: Job[] }>()
);

export const getByCareerAtHomeFailure = createAction(
    '[Job] Get By Career At Home Failure',
    props<{ error: string }>()
);


export const getByHotJobAtHome = createAction(
    '[Job] Get By Hot Job At Home',
    props<{ page: number; limit: number; sortBy: string; sortOrder: string }>()
);

export const getByHotJobAtHomeSuccess = createAction(
    '[Job] Get By Hot Job At Home Success',
    props<{ jobs: Job[] }>()
);

export const getByHotJobAtHomeFailure = createAction(
    '[Job] Get By Hot Job At Home Failure',
    props<{ error: string }>()
);

export const clearStateAtHome = createAction(
    '[Job] Clear State'
);


export const getAllAndSortAtJob = createAction(
    '[Job] Get All And Sort At Job',
    props<{ page: number; limit: number; sortBy: string; sortOrder: string }>()
);

export const getAllAndSortAtJobSuccess = createAction(
    '[Job] Get All And Sort At Job Success',
    props<{ jobs: Job[] }>()
);

export const getAllAndSortAtJobFailure = createAction(
    '[Job] Get All And Sort At Job Failure',
    props<{ error: string }>()
);