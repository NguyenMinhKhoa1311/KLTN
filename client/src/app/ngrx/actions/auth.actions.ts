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
export const getTokenAtUserManagementOfCandidate = createAction(
  '[Auth] get token At User Management Of Candidate',
  props<{ user: any }>()
);
export const getTokenAtUserManagementOfCandidateSuccess = createAction(
  '[Auth] get token At User Management Of Candidate success',
  props<{ res: any }>()
);
export const getTokenAtUserManagementOfCandidateFailure = createAction(
  '[Auth] get token At User Management Of Candidate failure',
  props<{ errorMessage: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTokenAtUserManagementOfRecruiter = createAction(
  '[Auth] get token At User Management Of Recruiter',
  props<{ user: any }>()
);
export const getTokenAtUserManagementOfRecruiterSuccess = createAction(
  '[Auth] get token At User Management Of Recruiter success',
  props<{ res: any }>()
);
export const getTokenAtUserManagementOfRecruiterFailure = createAction(
  '[Auth] get token At User Management Of Recruiter failure',
  props<{ errorMessage: string }>()
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getTokenAtUserManagementOfAdmin = createAction(
  '[Auth] get token At User Management Of Admin',
  props<{ user: any }>()
);
export const getTokenAtUserManagementOfAdminSuccess = createAction(
  '[Auth] get token At User Management Of Admin success',
  props<{ res: any }>()
);
export const getTokenAtUserManagementOfAdminFailure = createAction(
  '[Auth] get token At User Management Of Admin failure',
  props<{ errorMessage: string }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const changePassOfCandidateWithoutToken = createAction(
  '[Auth] change pass of candidate without token',
  props<{ user: any }>()
);
export const changePassOfCandidateWithoutTokenSuccess = createAction(
  '[Auth] change pass of candidate without token success',
  props<{ res: any }>()
);
export const changePassOfCandidateWithoutTokenFailure = createAction(
  '[Auth] change pass of candidate without token failure',
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