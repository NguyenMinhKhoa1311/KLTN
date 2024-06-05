import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CronJobService } from "../../services/cron-job/cron-job.service";
import * as CronJobActions from "../actions/cron-job.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class CronJobEffects {
    constructor(private action$: Actions, private cronJobService: CronJobService){}
    getCronJobAtChangeFormat$ = createEffect(() =>
        this.action$.pipe(
            ofType(CronJobActions.getCronJobAtChangeFormat),
            exhaustMap(() =>
                this.cronJobService.getCronJob().pipe(
                    map((cronJob) => {
                        return CronJobActions.getCronJobAtChangeFormatSuccess({cronJob: cronJob});
                    }),
                    catchError(error => of(CronJobActions.getCronJobAtChangeFormatFailure({error})))
                )
            )
        )
    )
    updateCronJobAtChangeFormat$ = createEffect(() =>
        this.action$.pipe(
            ofType(CronJobActions.updateCronJobAtChangeFormat),
            exhaustMap(action =>
                this.cronJobService.updateCronJob(action.cronTime, action.format).pipe(
                    map(() => {
                        return CronJobActions.updateCronJobAtChangeFormatSuccess();
                    }),
                    catchError(error => of(CronJobActions.updateCronJobAtChangeFormatFailure({error})))
                )
            )
        )
    )
}