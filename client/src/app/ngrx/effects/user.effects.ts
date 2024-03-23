import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user/user.service";
import * as UserActions from "../../ngrx/actions/user.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {}

  getUserByEmailWithGoogle$ = createEffect(()=>
  this.action$.pipe(
    ofType(UserActions.getUserByGmailWithGoogleAtLogin),
    mergeMap((action) => 
        this.userService.getUserWithUserName(action.Username).pipe(
            map((user) => UserActions.getUserByGmailWithGoogleAtLoginSuccess({user})),
            catchError((error) => of(UserActions.getUserByGmailWithGoogleAtLoginFailure({errorMessage: error.message})))
            )
    )
  )
  )
  createUserWithGoogleAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.createWithGoogleAtLogin),
        mergeMap((action) => 
            this.userService.create(action.user).pipe(
                map(() => UserActions.createWithGoogleAtLoginSuccess()),
                catchError((error) => of(UserActions.createWithGoogleAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )
}