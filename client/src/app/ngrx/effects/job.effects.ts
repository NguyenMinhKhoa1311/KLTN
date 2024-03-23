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
                catchError(() => 
                    of(JobActions.getByFieldAtHomeFailure({error: "Error"}))
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
                    catchError(() =>
                        of(JobActions.getByCareerAtHomeFailure({error: "Error"})
                    )
                )
            )
        )
        )
        )

}