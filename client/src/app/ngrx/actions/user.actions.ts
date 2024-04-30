import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

export const createWithGoogleAtLogin = createAction(
    '[User] create with Google at login',
    props<{ user: any}>()
);
export const createWithGoogleAtLoginSuccess = createAction(
    '[User] create with Google at login success',
);
export const createWithGoogleAtLoginFailure = createAction(
    '[User] create with Google at login failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByGmailWithGoogleAtLogin = createAction(
    '[User]  get user by gmail with google at login',
    props<{ Username: string}>()
);
export const getUserByGmailWithGoogleAtLoginSuccess = createAction(
    '[User] get user by gmail with google at login success',
    props<{ user: User}>()
);
export const getUserByGmailWithGoogleAtLoginFailure = createAction(
    '[User]  get user by gmail with google failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByGmailOfRecruiterAtLogin = createAction(
    '[User] get by gmail of recruiter at login',
    props<{ Username: string}>()
);
export const getByGmailOfRecruiterAtLoginSuccess = createAction(
    '[User] get by gmail of recruiter at login success',
    props<{ user: User}>()
);
export const getByGmailOfRecruiterAtLoginFailure = createAction(
    '[User] get by gmail of recruiter at login failure',
    props<{ errorMessage: string}>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createWithGoogoleAtRegister = createAction(
    '[User] create with google at register',
    props<{ user: User}>()
);
export const createWithGoogleAtRegisterSuccess = createAction(
    '[User] create with google at register success',
);
export const createWithGoogleAtRegisterFailure = createAction(
    '[User] create with google at register failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByGmailWithGoogleAtRegisterSuccess = createAction(
    '[User] get user by gmail with google at register success',
    props<{ user: User}>()
);
export const getUserByGmailWithGoogleAtRegisterFailure = createAction(
    '[User] get user by gmail with google at register failure',
    props<{ errorMessage: string}>()
);

export const getUserByGmailWithGoogleAtRegister = createAction(
    '[User] get user by gmail with google at register',
    props<{ username: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByGmailWithAccountAtRegister = createAction(
    '[User] get user by gmail with account at register',
    props<{ username: string}>()
);
export const getUserByGmailWithAccountAtRegisterSuccess = createAction(
    '[User] get user by gmail with account at register success',
    props<{ user: User}>()
);
export const getUserByGmailWithAccountAtRegisterFailure = createAction(
    '[User] get user by gmail with account at register failure',
    props<{ errorMessage: string}>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByGmailAtCreateProfile = createAction(
    '[User] get user by gmail at create profile',
    props<{ username: string}>()
);
export const getUserByGmailAtCreateProfileSuccess = createAction(
    '[User] get user by gmail at create profile success',
    props<{ user: User}>()
);
export const getUserByGmailAtCreateProfileFailure = createAction(
    '[User] get user by gmail at create profile failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByUsernameAndPasswordAtLogin = createAction(
    '[User] get user by username and password at login',
    props<{ username: string, password: string}>()
);
export const getUserByUsernameAndPasswordAtLoginSuccess = createAction(
    '[User] get user by username and password at login success',
    props<{ user: User}>()
);
export const getUserByUsernameAndPasswordAtLoginFailure = createAction(
    '[User] get user by username and password at login failure',
    props<{ errorMessage: string}>()
);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createUserOfRecruiterAtLogin = createAction(
    '[User] create user of recruiter at login',
    props<{ user: User}>()
);
export const createUserOfRecruiterAtLoginSuccess = createAction(
    '[User] create user of recruiter at login success',
    props<{ user: User}>()
);
export const createUserOfRecruiterAtLoginFailure = createAction(
    '[User] create user of recruiter at login failure',
    props<{ errorMessage: string}>()
);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByGmailOfRecruiterAtRegister = createAction(
    '[User] get by gmail of recruiter at register',
    props<{ Username: string}>()
);
export const getByGmailOfRecruiterAtRegisterSuccess = createAction(
    '[User] get by gmail of recruiter at register success',
    props<{ user: User}>()
);
export const getByGmailOfRecruiterAtRegisterFailure = createAction(
    '[User] get by gmail of recruiter at register failure',
    props<{ errorMessage: string}>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createUserOfRecruiterAtRegister = createAction(
    '[User] create user of recruiter at register',
    props<{ user: User}>()
);
export const createUserOfRecruiterAtRegisterSuccess = createAction(
    '[User] create user of recruiter at register success',
    props<{ user: User}>()
);
export const createUserOfRecruiterAtRegisterFailure = createAction(
    '[User] create user of recruiter at register failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUsernameAndPasswordOfRecruiterAtLogin = createAction(
    '[User] get by username and password of recruiter at login',
    props<{ username: string, password: string}>()
);
export const getByUsernameAndPasswordOfRecruiterAtLoginSuccess = createAction(
    '[User] get by username and password of recruiter at login success',
    props<{ user: User}>()
);
export const getByUsernameAndPasswordOfRecruiterAtLoginFailure = createAction(
    '[User] get by username and password of recruiter at login failure',
    props<{ errorMessage: string}>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByGmailOfRecruiterWithAccountAtRegister = createAction(
    '[User] get by gmail of recruiter with account at register',
    props<{ username: string}>()
);
export const getByGmailOfRecruiterWithAccountAtRegisterSuccess = createAction(
    '[User] get by gmail of recruiter with account at register success',
    props<{ user: User}>()
);

export const getByGmailOfRecruiterWithAccountAtRegisterFailure = createAction(
    '[User] get by gmail of recruiter with account at register failure',
    props<{ errorMessage: string}>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetState = createAction(
    '[User] reset state',
);