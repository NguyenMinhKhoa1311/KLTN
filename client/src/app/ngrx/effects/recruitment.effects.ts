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
                this.recruitmentService.updateStatusSeen(action.recruiter, action.status).pipe(
                    map(() => {
                        return RecruitmentActions.updateStatusSeenAtAplicationListSuccess()
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
                    map(() => {
                        return RecruitmentActions.updateStatusAtAplicationListSuccess()
                    }),
                    catchError((err) =>
                        of(RecruitmentActions.updateStatusAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )
}