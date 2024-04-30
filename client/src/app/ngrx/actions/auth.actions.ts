import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';
import { UserFirebase } from '../../models/userFirebase.model';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const login = createAction('[Auth] login');

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ user:UserFirebase}>()
  );

export const loginFailure = createAction(
  '[Auth] login failure',
  props<{ errorMessage: any }>()
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const loginAtRegister = createAction
('[Auth] login at register'
);

export const loginAtRegisterSuccess = createAction(
  '[Auth] login at register success',
  props<{ user: UserFirebase }>()
);

export const loginAtRegisterFailure = createAction(
  '[Auth] login at register failure',
  props<{ errorMessage: any }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const loginOfRecruiterAtLogin = createAction
('[Auth] login of recruiter at login'
);
export const loginOfRecruiterAtLoginSuccess = createAction(
  '[Auth] login of recruiter at login success',
  props<{ user: UserFirebase }>()
);
export const loginOfRecruiterAtLoginFailure = createAction(
  '[Auth] login of recruiter at login failure',
  props<{ errorMessage: any }>()
);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const loginOfRecruiterAtRegister = createAction
('[Auth] login of recruiter at register'
);
export const loginOfRecruiterAtRegisterSuccess = createAction(
  '[Auth] login of recruiter at register success',
  props<{ user: UserFirebase }>()
);
export const loginOfRecruiterAtRegisterFailure = createAction(
  '[Auth] login of recruiter at register failure',
  props<{ errorMessage: any }>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const logout = createAction('[Auth] logout');

export const logoutSuccess = createAction('[Auth] logout success');

export const logoutFailure = createAction(
  '[Auth] logout failure',
  props<{ errorMessage: any }>()
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const storedUserFirebase = createAction(
  '[Auth] stored user firebase',
 (userFirebase: User) => ({ userFirebase })
 );

 export const resetState = createAction('[Auth] reset state');