import { createAction, props } from "@ngrx/store";
import { Career } from "../../models/career.model";

export const getAllAtJobs = createAction(
    '[Career] Get All At Jobs'
    );
export const getAllAtJobsSuccess = createAction(
    '[Career] Get All At Jobs Success',
    props<{careers: Career[]}>()
    );
export const getAllAtJobsFailure = createAction(
    '[Career] Get All At Jobs Failure',
    props<{error: string}>()
    );




export const getByFieldNameAtJob = createAction(
    '[Career] Get By Field Name At Job',
    props<{fieldName: string}>()
    );

export const getByFieldNameAtJobSuccess = createAction(
    '[Career] Get By Field Name At Job Success',
    props<{careers: Career[]}>()
    );

export const getByFieldNameAtJobFailure = createAction(
    '[Career] Get By Field Name At Job Failure',
    props<{error: string}>()
    );




export const getAllAtCreateProfile = createAction(
    '[Career] Get All At Create Profile'
    );
export const getAllAtCreateProfileSuccess = createAction(
    '[Career] Get All At Create Profile Success',
    props<{careers: Career[]}>()
    );

export const getAllAtCreateProfileFailure = createAction(
    '[Career] Get All At Create Profile Failure',
    props<{error: string}>()
    );





export const getByFieldAtProfile = createAction(
    '[Career] Get By Field At Profile',
    props<{field: string}>()
    );

export const getByFieldAtProfileSuccess = createAction(
    '[Career] Get By Field At Profile Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtProfileFailure = createAction(
    '[Career] Get By Field At Profile Failure',
    props<{error: string}>()
    );






export const getAllAtCreateJob = createAction(
    '[Career] Get All At Create Job'
    );
export const getAllAtCreateJobSuccess = createAction(
    '[Career] Get All At Create Job Success',
    props<{careers: Career[]}>()
    );
export const getAllAtCreateJobFailure = createAction(
    '[Career] Get All At Create Job Failure',
    props<{error: string}>()
    );


    

export const getByFieldAtCreateJob = createAction(
    '[Career] Get By Field At Create Job',
    props<{field: string}>()
    );
export const getByFieldAtCreateJobSuccess = createAction(
    '[Career] Get By Field At Create Job Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtCreateJobFailure = createAction(
    '[Career] Get By Field At Create Job Failure',
    props<{error: string}>()
    );

            