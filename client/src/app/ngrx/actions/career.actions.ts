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
    
