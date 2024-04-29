import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user/user.service";
import * as UserActions from "../../ngrx/actions/user.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { isUser } from "../../models/user.model";

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
                map((user) => {
                    if(user._id.length > 0){
                        return UserActions.createWithGoogleAtLoginSuccess()
                    }
                    return UserActions.createWithGoogleAtLoginFailure({errorMessage: 'error'})
                }),
                catchError((error) => of(UserActions.createWithGoogleAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getUserByEmailWithGoogleAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getUserByGmailWithGoogleAtRegister),
        mergeMap((action) => 
            this.userService.getUserWithUserName(action.username).pipe(
                map((user) => UserActions.getUserByGmailWithGoogleAtRegisterSuccess({user})),
                catchError((error) => of(UserActions.getUserByGmailWithGoogleAtRegisterFailure({errorMessage: error.message})))
                )
        )
    )
    )

    createUserWithGoogleAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.createWithGoogoleAtRegister),
        mergeMap((action) => 
            this.userService.create(action.user).pipe(
                map((user) => {
                    if(user._id.length > 0){
                        return UserActions.createWithGoogleAtRegisterSuccess()
                    }
                    return UserActions.createWithGoogleAtRegisterFailure({errorMessage: 'error'})
                }),
                catchError((error) => of(UserActions.createWithGoogleAtRegisterFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getUserByGmailAtCreateProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getUserByGmailAtCreateProfile),
        mergeMap((action) => 
            this.userService.getUserWithUserName(action.username).pipe(
                map((user) => UserActions.getUserByGmailAtCreateProfileSuccess({user})),
                catchError((error) => of(UserActions.getUserByGmailAtCreateProfileFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getByUsernameAndPaswordAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getUserByUsernameAndPasswordAtLogin),
        mergeMap((action) => 
            this.userService.getUserWithUserNameAndPassword(action.username,action.password).pipe(
                map((user) => UserActions.getUserByUsernameAndPasswordAtLoginSuccess({user})),
                catchError((error) => of(UserActions.getUserByUsernameAndPasswordAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getUserByGmailWithAccountAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getUserByGmailWithAccountAtRegister),
        mergeMap((action) => 
            this.userService.getUserWithUserName(action.username).pipe(
                map((user) => UserActions.getUserByGmailWithAccountAtRegisterSuccess({user})),
                catchError((error) => of(UserActions.getUserByGmailWithAccountAtRegisterFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getByGmailOfRecruiterAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getByGmailOfRecruiterAtLogin),
        mergeMap((action) => 
            this.userService.getUserWithUserName(action.Username).pipe(
                map((user) => UserActions.getByGmailOfRecruiterAtLoginSuccess({user})),
                catchError((error) => of(UserActions.getByGmailOfRecruiterAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )

    createUserOfRecruiterAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.createUserOfRecruiterAtLogin),
        mergeMap((action) => 
            this.userService.create(action.user).pipe(
                map((user) => {
                    if(user._id.length > 0){
                        return UserActions.createUserOfRecruiterAtLoginSuccess({user:user})
                    }
                    return UserActions.createUserOfRecruiterAtLoginFailure({errorMessage: 'error'})
                }),
                catchError((error) => of(UserActions.createUserOfRecruiterAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getByUsernameAndPasswordOfRecruiterAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getByUsernameAndPasswordOfRecruiterAtLogin),
        mergeMap((action) => 
            this.userService.getUserWithUserNameAndPassword(action.username,action.password).pipe(
                map((user) => UserActions.getByUsernameAndPasswordOfRecruiterAtLoginSuccess({user})),
                catchError((error) => of(UserActions.getByUsernameAndPasswordOfRecruiterAtLoginFailure({errorMessage: error.message})))
                )
        )
    )
    )


    createUserOfRecruiterAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.createUserOfRecruiterAtRegister),
        mergeMap((action) => 
            this.userService.create(action.user).pipe(
                map((user) => {
                    if(user._id.length > 0){
                        return UserActions.createUserOfRecruiterAtRegisterSuccess({user:user})
                    }
                    return UserActions.createUserOfRecruiterAtRegisterFailure({errorMessage: 'error'})
                }),
                catchError((error) => of(UserActions.createUserOfRecruiterAtRegisterFailure({errorMessage: error.message})))
                )
        )
    )
    )


    getByGmailOfRecruiterAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(UserActions.getByGmailOfRecruiterAtRegister),
        mergeMap((action) => 
            this.userService.getUserWithUserName(action.Username).pipe(
                map((user) => UserActions.getByGmailOfRecruiterAtRegisterSuccess({user})),
                catchError((error) => of(UserActions.getByGmailOfRecruiterAtRegisterFailure({errorMessage: error.message})))
                )
        )
    )
    )

    getByGmailOfRecruiterWithAccountAtRegister$ = createEffect(() =>
    this.action$.pipe(
        ofType(UserActions.getByGmailOfRecruiterWithAccountAtRegister),
        mergeMap((action) =>
            this.userService.getUserWithUserName(action.username).pipe(
                map((user) => UserActions.getByGmailOfRecruiterWithAccountAtRegisterSuccess({ user })),
                catchError((error) => of(UserActions.getByGmailOfRecruiterWithAccountAtRegisterFailure({ errorMessage: error.message })))
            )
        )
    )
    )
}