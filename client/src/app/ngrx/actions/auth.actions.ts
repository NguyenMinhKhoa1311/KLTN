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
export const getTokenAtLoginOfCandidate = createAction(
  '[Auth] get token At Login Of Candidate',
  props<{ user: any }>()
);
export const getTokenAtLoginOfCandidateSuccess = createAction(
  '[Auth] get token At Login Of Candidate success',
  props<{ res: any }>()
);

export const getTokenAtLoginOfCandidateFailure = createAction(
  '[Auth] get token At Login Of Candidate failure',
  props<{ errorMessage: string }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTokenAtLoginOfRecruiter = createAction(
  '[Auth] get token At Login Of Recruiter',
  props<{ user: any }>()
);
export const getTokenAtLoginOfRecruiterSuccess = createAction(
  '[Auth] get token At Login Of Recruiter success',
  props<{ res: any }>()
);
export const getTokenAtLoginOfRecruiterFailure = createAction(
  '[Auth] get token At Login Of Recruiter failure',
  props<{ errorMessage: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTokenAtRegisterOfRecruiter = createAction(
  '[Auth] get token At Register Of Recruiter',
  props<{ user: any }>()
);
export const getTokenAtRegisterOfRecruiterSuccess = createAction(
  '[Auth] get token At Register Of Recruiter success',
  props<{ res: any }>()
);
export const getTokenAtRegisterOfRecruiterFailure = createAction(
  '[Auth] get token At Register Of Recruiter failure',
  props<{ errorMessage: string }>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTokenAtRegisterOfCandidate = createAction(
  '[Auth] get token At Register Of Candidate',
  props<{ user: any }>()
);
export const getTokenAtRegisterOfCandidateSuccess = createAction(
  '[Auth] get token At Register Of Candidate success',
  props<{ res: any }>()
);
export const getTokenAtRegisterOfCandidateFailure = createAction(
  '[Auth] get token At Register Of Candidate failure',
  props<{ errorMessage: string }>()
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