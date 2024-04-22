import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecruitmentService } from "../../services/recruitment/recruitment.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as RecruitmentActions from "../actions/recruitment.actions";

@Injectable()
export class RecruitmentEffects {
    constructor(
        private actions$: Actions,
        private recruitmentService: RecruitmentService
    ) {}

    getByRecruiter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruitmentActions.getByRecruiterAtAplicationList),
            exhaustMap(action =>
                this.recruitmentService.getByRecruiter(action.recruiter, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(recruitments => {
                        return RecruitmentActions.getByRecruiterAtAplicationListSuccess({recruitments})
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.getByRecruiterAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )

    updateStatusSeenAtAplicationList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruitmentActions.updateStatusSeenAtAplicationList),
            exhaustMap(action =>
                this.recruitmentService.updateStatusSeen(action.recruitment, action.status).pipe(
                    map((recruitment) => {
                        return RecruitmentActions.updateStatusSeenAtAplicationListSuccess({recruitment:recruitment})
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.updateStatusSeenAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )

    updateStatusAtAplicationList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruitmentActions.updateStatusAtAplicationList),
            exhaustMap(action =>
                this.recruitmentService.updateStatus(action.recruiter, action.status).pipe(
                    map((recruitment) => {
                        return RecruitmentActions.updateStatusAtAplicationListSuccess({recruitment:recruitment})
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.updateStatusAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )

    getByCandidasteAtAplicationListOfCandidate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate),
            exhaustMap(action =>
                this.recruitmentService.getByCandidate(action.candidate, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map(recruitments => {
                        return RecruitmentActions.getByCandidasteAtAplicationListOfCandidateSuccess({recruitments})
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.getByCandidasteAtAplicationListOfCandidateFailure({error: err})
                    )
                )
            )
        )
        )
        )

        updateDateInterviewAtAplicationList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruitmentActions.updateDateInterviewAtAplicationList),
            exhaustMap(action =>
                this.recruitmentService.updateDateInterview(action.id, action.date).pipe(
                    map((recruitment) => {
                        return RecruitmentActions.updateDateInterviewAtAplicationListSuccess({recruitment:recruitment})
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.updateDateInterviewAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )
}