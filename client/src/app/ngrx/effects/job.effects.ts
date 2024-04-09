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

    getByFieldNameAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByFieldNameAtJob),
            exhaustMap(action =>
                this.jobService.getByFieldName(action.fieldName, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByFieldNameAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByFieldNameAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )
    
    getByCareerNameAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByCareerNameAtJob),
            exhaustMap(action =>
                this.jobService.getByCareerName(action.careerName, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByCareerNameAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByCareerNameAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )
    createJobAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.createJobAtJob),
            exhaustMap(action =>
                this.jobService.create(action.job).pipe(
                    map(() => {
                        return JobActions.createJobAtJobSuccess()
                    }),
                    catchError((err) =>
                        of(JobActions.createJobAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    updateJobAtJobDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.updateJobAtJobDetail),
            exhaustMap(action =>
                this.jobService.update(action.job, action.job).pipe(
                    map(() => {
                        return JobActions.updateJobAtJobDetailSuccess({job: action.job})
                    }),
                    catchError((err) =>
                        of(JobActions.updateJobAtJobDetailFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByRecruiterAtJobDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getJobByRecruiterAtJobDetail),
            exhaustMap(action =>
                this.jobService.getByRecruiter(action.recruiter).pipe(
                    map(jobs => {
                        return JobActions.getJobByRecruiterAtJobDetailSuccess({jobs: jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getJobByRecruiterAtJobDetailFailure({error: err})
                    )
                )
            )
        )
        )
        )
    getByLocationWithKeywordAtJob$= createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByLocationdWithKeywordsAtJob),
            exhaustMap(action =>
                this.jobService.getByLocation(action.location, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(jobs => {
                        return JobActions.getByLocationdWithKeywordsAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByLocationdWithKeywordsAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

}