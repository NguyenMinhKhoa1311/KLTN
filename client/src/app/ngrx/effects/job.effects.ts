import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobService } from "../../services/job/job.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as JobActions from "../actions/job.actions";

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService
  ) {}

  getByFieldAtHome$ = createEffect(() => 
    this.actions$.pipe(
        ofType(JobActions.getByFieldAtHome),
        exhaustMap(action =>
             this.jobService.getByField(action.field, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                map(jobs =>{
                    return JobActions.getByFieldAtHomeSuccess({jobs})
                }),
                catchError((err) => 
                    of(JobActions.getByFieldAtHomeFailure({error: err}))
                )
            )
        ) 
        )
        );
   getByCareerAtHome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByCareerAtHome),
            exhaustMap(action =>
                this.jobService.getByCareer(action.career, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByCareerAtHomeSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByCareerAtHomeFailure({error: err})
                    )
                )
            )
        )
        )
        )
   getByHotJobAtHome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByHotJobAtHome),
            exhaustMap(action =>
                this.jobService.getByHotJob( action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByHotJobAtHomeSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByCareerAtHomeFailure({error: err})
                    )
                )
            )
        )
        )
        )
    getAllAndSortAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getAllAndSortAtJob),
            exhaustMap(action =>
                this.jobService.getAllAndSort(action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getAllAndSortAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getAllAndSortAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByFieldAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByFieldAtJob),
            exhaustMap(action =>
                this.jobService.getByField(action.field, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByFieldAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByFieldAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

}