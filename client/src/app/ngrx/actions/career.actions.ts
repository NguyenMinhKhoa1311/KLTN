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