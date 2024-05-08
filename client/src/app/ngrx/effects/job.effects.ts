import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobService } from "../../services/job/job.service";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import * as JobActions from "../actions/job.actions";

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService
  ) {}


   getByCareerAtHome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByCareerAtHome),
            exhaustMap(action =>
                this.jobService.getByCareer(action.career, action.page, action.limit).pipe(
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
                this.jobService.getByHotJob( action.page, action.limit).pipe(
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
                this.jobService.getAllAndSort(action.page, action.limit).pipe(
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
                this.jobService.getByFieldName(action.fieldName, action.page, action.limit).pipe(
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
                this.jobService.getByCareerName(action.careerName, action.page, action.limit).pipe(
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

    getByTagAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByTagAtJob),
            exhaustMap(action =>
                this.jobService.getByTag(action.tag, action.page, action.limit).pipe(
                    map(jobs => {
                        return JobActions.getByTagAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByTagAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByTagWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByTagWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByTagWithUrgent(action.tag, action.page, action.limit, action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByTagWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByTagWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByKeywordWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByKeywordWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByKeywordWithUrgent(action.keyword, action.page, action.limit, action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByKeywordWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByKeywordWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByLocationWithKeywordAndUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByLocationdWithKeywordsWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByLocationWithUrgent(action.location, action.page, action.limit,action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByLocationdWithKeywordsWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByLocationdWithKeywordsWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByCareerNameWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByCareerNameWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByCareerNameWithUrgent(action.careerName, action.page, action.limit, action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByCareerNameWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByCareerNameWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )
    
    getByFieldNameWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByFieldNameWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByFieldNameWithUrgent(action.fieldName, action.page, action.limit, action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByFieldNameWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByFieldNameWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByFieldWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByFieldWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getByFieldWithUrgent(action.field, action.page, action.limit, action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getByFieldWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByFieldWithUrgentAtJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getAllAndSortWithUrgentAtJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getAllAndSortWithUrgentAtJob),
            exhaustMap(action =>
                this.jobService.getAllAndSortWithUrgent(action.page, action.limit,  action.urgent).pipe(
                    map(jobs => {
                        return JobActions.getAllAndSortWithUrgentAtJobSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getAllAndSortWithUrgentAtJobFailure({error: err})
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
                this.jobService.update(action.job, action.id).pipe(
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
                this.jobService.getByRecruiter(action.recruiter,action.page, action.limit).pipe(
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
                this.jobService.getByLocation(action.location, action.page, action.limit).pipe(
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
    getByJobIdAtJobDetailOfCandidate$= createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getJobByIdAtJobDetailOfCandidate),
            switchMap(action =>
                this.jobService.getByJobId(action.id).pipe(
                    map(job => {                        

                        return JobActions.getJobByIdAtJobDetailOfCandidateSuccess({job})
                    }),
                    catchError((err) =>
                        of(JobActions.getJobByIdAtJobDetailOfCandidateFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByJobIdAtApplyJob$= createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByJobIdAtApplyJob),
            switchMap(action =>
                this.jobService.getByJobId(action.id).pipe(
                    map(job => {
                        return JobActions.getByJobIdAtApplyJobSuccess({job})
                    }),
                    catchError((err) =>
                        of(JobActions.getByJobIdAtApplyJobFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByCompanyAtCompanyDetail$= createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.getByCompanyAtCompanyDetail),
            switchMap(action =>
                this.jobService.getByCompany(action.company, action.page, action.limit).pipe(
                    map(jobs => {
                        return JobActions.getByCompanyAtCompanyDetailSuccess({jobs})
                    }),
                    catchError((err) =>
                        of(JobActions.getByCompanyAtCompanyDetailFailure({error: err})
                    )
                )
            )
        )
        )
        )


    deleteAtJobDetailOfRecruiter$= createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.deleteAtJobDetailOfRecruiter),
            switchMap(action =>
                this.jobService.deleteJob(action.id,action.companyId,action.fieldId,action.careerId).pipe(
                    map((result) => {
                        if(result){
                            console.log("delete success");
                            
                            return JobActions.deleteAtJobDetailOfRecruiterSuccess()
                        }
                        return JobActions.deleteAtJobDetailOfRecruiterFailure({error: "delete failed"})
                    }),
                    catchError((err) =>
                        of(JobActions.deleteAtJobDetailOfRecruiterFailure({error: err})
                    )
                )
            )
        )
        )
        )

        updateRecruitmentAtJobDetail$= createEffect(() =>
            this.actions$.pipe(
                ofType(JobActions.updateRecruitmentAtJobDetail),
                switchMap(action =>
                    this.jobService.updateRecrutment(action.recruitment, action.id).pipe(
                        map((job) => {
                            return JobActions.updateRecruitmentAtJobDetailSuccess({job: job})
                        }),
                        catchError((err) =>
                            of(JobActions.updateRecruitmentAtJobDetailFailure({error: err})
                        )
                    )
                )
            )
            )
            )


        getByKeywordAtJob$ = createEffect(() =>
            this.actions$.pipe(
                ofType(JobActions.getByKeywordAtJob),
                exhaustMap(action =>
                    this.jobService.getByKeyWord(action.keyword, action.page, action.limit).pipe(
                        map(jobs => {
                            return JobActions.getByKeywordAtJobSuccess({jobs})
                        }),
                        catchError((err) =>
                            of(JobActions.getByKeywordAtJobFailure({error: err})
                        )
                    )
                )
            )
            )
            )
        
        getAllAndSortByWelfareAndSalaryAtHome$ = createEffect(() =>
            this.actions$.pipe(
                ofType(JobActions.getAllAndSortByWelfareAndSalaryAtHome),
                exhaustMap(action =>
                    this.jobService.getAllAndSortByWelfareAndSalary(action.page, action.limit).pipe(
                        map(jobs => {
                            return JobActions.getAllAndSortByWelfareAndSalaryAtHomeSuccess({jobs})
                        }),
                        catchError((err) =>
                            of(JobActions.getAllAndSortByWelfareAndSalaryAtHomeFailure({error: err})
                        )
                    )
                )
            )
            )
            )

    


}