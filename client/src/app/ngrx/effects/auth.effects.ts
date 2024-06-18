import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth/auth.service';
import { from } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<{}>
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(() => 
        from(this.authService.loginWithGoogle()).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginFailure({ errorMessage: error }))
          )
        )
      ),
    )
  );

  loginAtRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginAtRegister),
      exhaustMap(() =>
        from(this.authService.loginWithGoogle()).pipe(
          map((user) => AuthActions.loginAtRegisterSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginAtRegisterFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout();
      }),
      map(() => AuthActions.logoutSuccess()),
      catchError((error) =>
        of(AuthActions.logoutFailure({ errorMessage: error }))
      )
    )
  );

  loginOfRecruiterAtLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginOfRecruiterAtLogin),
      exhaustMap(() =>
        from(this.authService.loginWithGoogle()).pipe(
          map((user) => AuthActions.loginOfRecruiterAtLoginSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginOfRecruiterAtLoginFailure({ errorMessage: error }))
          )
        )
      )
    )
  );


  loginOfRecruiterAtRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginOfRecruiterAtRegister),
      exhaustMap(() =>
        from(this.authService.loginWithGoogle()).pipe(
          map((user) => AuthActions.loginOfRecruiterAtRegisterSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginOfRecruiterAtRegisterFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtLoginOfCandidate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtLoginOfCandidate),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtLoginOfCandidateSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtLoginOfCandidateFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtLoginOfRecruiter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtLoginOfRecruiter),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtLoginOfRecruiterSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtLoginOfRecruiterFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtRegisterOfRecruiter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtRegisterOfRecruiter),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtRegisterOfRecruiterSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtRegisterOfRecruiterFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtRegisterOfCandidate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtRegisterOfCandidate),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtRegisterOfCandidateSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtRegisterOfCandidateFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtUserManagementOfCandidate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtUserManagementOfCandidate),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtUserManagementOfCandidateSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtUserManagementOfCandidateFailure({ errorMessage: error }))
          )
        )
      )
    )
  );


  getTokenAtUserManagementOfRecruiter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtUserManagementOfRecruiter),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtUserManagementOfRecruiterSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtUserManagementOfRecruiterFailure({ errorMessage: error }))
          )
        )
      )
    )
  );

  getTokenAtUserManagementOfAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getTokenAtUserManagementOfAdmin),
      exhaustMap((action) =>
        from(this.authService.getToken(action.user)).pipe(
          map((res) => AuthActions.getTokenAtUserManagementOfAdminSuccess({ res })),
          catchError((error) =>
            of(AuthActions.getTokenAtUserManagementOfAdminFailure({ errorMessage: error }))
          )
        )
      )
    )
  );
}