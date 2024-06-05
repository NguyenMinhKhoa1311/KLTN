import { CronJob } from "../../models/cron-job.model";

export interface CronJobState {
    isGetCronJobAtChangeFormatLoading: boolean;
    isGetCronJobAtChangeFormatSuccess: boolean;
    getCronJobAtChangeFormatError: string;
    cronJobAtChangeFormat: CronJob;

    isUpdateCronJobAtChangeFormatLoading: boolean;
    isUpdateCronJobAtChangeFormatSuccess: boolean;
    updateCronJobAtChangeFormatError: string;
}