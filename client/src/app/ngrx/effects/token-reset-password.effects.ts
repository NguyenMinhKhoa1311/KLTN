import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TokenResetPasswordService } from "../../services/token-reset-password/token-reset-password.service";
import * as TokenResetPasswordActions from "../actions/token-reset-password.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class TokenResetPasswordEffects {
    constructor(private action$: Actions, private tokenResetPasswordService: TokenResetPasswordService){}

    createTokenAtForgotPasswordOfCandidate$ = createEffect(() =>
        this.action$.pipe(
            ofType(TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidate),
            exhaustMap(action =>
                this.tokenResetPasswordService.create(action.tokenResetPassword).pipe(
                    map((token) => {
                        if(token._id != '500'){
                            return TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidateSuccess({token: token});
                        }else{
                            return TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidateFailure({error: 'Failed to create token'});
                        }
                    }),
                    catchError(error => of(TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidateFailure({error})))
                )
            )
        )
    )
    createTokenAtForgotPasswordOfRecruiter$ = createEffect(() =>
        this.action$.pipe(
            ofType(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiter),
            exhaustMap(action =>
                this.tokenResetPasswordService.create(action.tokenResetPassword).pipe(
                    map((token) => {
                        if(token._id != '500'){
                            return TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiterSuccess({token: token});
                        }else{
                            return TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiterFailure({error: 'Failed to create token'});
                        }
                    }),
                    catchError(error => of(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiterFailure({error})))
                )
            )
        )
    )
}