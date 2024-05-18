import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecruiterService } from "../../services/recruiter/recruiter.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as RecruiterActions from "../actions/recruiter.actions";

@Injectable()
export class RecruiterEffects {
    constructor(
        private actions$: Actions,
        private recruiterService: RecruiterService
    ) {}

    createRecruiterAtRegister$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruiterActions.createRecruiterAtRegister),
            exhaustMap(action =>
                this.recruiterService.createRecruiter(action.recruiter,action.company).pipe(
                    map((result) => {
                        if(result._id!="500"){
                            return RecruiterActions.createRecruiterAtRegisterSuccess({recruiter: result})
                        }
                        else{
                            return RecruiterActions.createRecruiterAtRegisterFailure({errorMessage: 'Error'})
                        }
                    }),
                    catchError((err) =>
                        of(RecruiterActions.createRecruiterAtRegisterFailure({errorMessage: err})
                    )
                )
            )
        )
    )
    )

    getRecruiterByUserAtLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruiterActions.getByUserAtLogin),
            exhaustMap(action =>
                this.recruiterService.getByUser(action.user).pipe(
                    map((result) => {
                        return RecruiterActions.getByUserAtLoginSuccess({recruiter: result})
                    }),
                    catchError((err) =>
                        of(RecruiterActions.getByUserAtLoginFailure({errorMessage: err})
                    )
                )
            )
        )
    )
    )

    getRecruiterByUserAtRegister$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RecruiterActions.getByUserAtRegister),
            exhaustMap(action =>
                this.recruiterService.getByUser(action.user).pipe(
                    map((result) => {
                        return RecruiterActions.getByUserAtRegisterSuccess({recruiter: result})
                    }),
                    catchError((err) =>
                        of(RecruiterActions.getByUserAtRegisterFailure({errorMessage: err})
                    )
                )
            )
        )
    )
    )
}