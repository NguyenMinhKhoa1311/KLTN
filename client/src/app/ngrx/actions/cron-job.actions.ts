import { createAction, props } from "@ngrx/store";
import { CronJob } from "../../models/cron-job.model";

export const getCronJobAtChangeFormat = createAction(
    '[CronJob] Get CronJob At Change Format'
);
export const getCronJobAtChangeFormatSuccess = createAction(
    '[CronJob] Get CronJob At Change Format Success',
    props<{cronJob: CronJob}>()
);
export const getCronJobAtChangeFormatFailure = createAction(
    '[CronJob] Get CronJob At Change Format Failure',
    props<{error: string}>()
);



////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateCronJobAtChangeFormat = createAction(
    '[CronJob] Update CronJob At Change Format',
    props<{cronTime: string, format: number}>()
);
export const updateCronJobAtChangeFormatSuccess = createAction(
    '[CronJob] Update CronJob At Change Format Success',
);
export const updateCronJobAtChangeFormatFailure = createAction(
    '[CronJob] Update CronJob At Change Format Failure',
    props<{error: string}>()
);