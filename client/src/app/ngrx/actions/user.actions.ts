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
export const createAtRegisterOfAdmin = createAction(
    '[User] create at register of admin',
    props<{ user: User}>()
);
export const createAtRegisterOfAdminSuccess = createAction(
    '[User] create at register of admin success',
    props<{ user: User}>()
);
export const createAtRegisterOfAdminFailure = createAction(
    '[User] create at register of admin failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByGmailOfAdminWithAccountAtRegister = createAction(
    '[User] get by gmail of admin with account at register',
    props<{ username: string}>()
);
export const getByGmailOfAdminWithAccountAtRegisterSuccess = createAction(
    '[User] get by gmail of admin with account at register success',
    props<{ user: User}>()
);
export const getByGmailOfAdminWithAccountAtRegisterFailure = createAction(
    '[User] get by gmail of admin with account at register failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByGmailOfAdminAtRegister = createAction(
    '[User] get by gmail of admin at register',
    props<{ username: string}>()
);
export const getByGmailOfAdminAtRegisterSuccess = createAction(
    '[User] get by gmail of admin at register success',
    props<{ user: User}>()
);
export const getByGmailOfAdminAtRegisterFailure = createAction(
    '[User] get by gmail of admin at register failure',
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
export const changePassOfCandidate = createAction(
    '[User] change pass of candidate',
    props<{ token: string, password: string}>()
);
export const changePassOfCandidateSuccess = createAction(
    '[User] change pass of candidate success',
    props<{ user: User}>()
);
export const changePassOfCandidateFailure = createAction(
    '[User] change pass of candidate failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const changePassOfRecruiter = createAction(
    '[User] change pass of recruiter',
    props<{ token: string, password: string}>()
);
export const changePassOfRecruiterSuccess = createAction(
    '[User] change pass of recruiter success',
    props<{ user: User}>()
);
export const changePassOfRecruiterFailure = createAction(
    '[User] change pass of recruiter failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const changePassOfRecruiterWithoutToken = createAction(
    '[User] change pass of recruiter without token',
    props<{ username: string, password: string,token:string}>()
);
export const changePassOfRecruiterWithoutTokenSuccess = createAction(
    '[User] change pass of recruiter without token success',
    props<{ user: User}>()
);
export const changePassOfRecruiterWithoutTokenFailure = createAction(
    '[User] change pass of recruiter without token failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const changePassOfCandidateWithoutToken = createAction(
    '[User] change pass of candidate without token',
    props<{ username: string, password: string,token:string}>()
);
export const changePassOfCandidateWithoutTokenSuccess = createAction(
    '[User] change pass of candidate without token success',
    props<{ user: User}>()
);
export const changePassOfCandidateWithoutTokenFailure = createAction(
    '[User] change pass of candidate without token failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const changePassOfAdminWithoutToken = createAction(
    '[User] change pass of admin without token',
    props<{ username: string, password: string,token:string}>()
);
export const changePassOfAdminWithoutTokenSuccess = createAction(
    '[User] change pass of admin without token success',
    props<{ user: User}>()
);
export const changePassOfAdminWithoutTokenFailure = createAction(
    '[User] change pass of admin without token failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByUsernameAtUserManagementOfCandidate = createAction(
    '[User] get user by username at user management of candidate',
    props<{ username: string}>()
);
export const getUserByUsernameAtUserManagementOfCandidateSuccess = createAction(
    '[User] get user by username at user management of candidate success',
    props<{ user: User}>()
);
export const getUserByUsernameAtUserManagementOfCandidateFailure = createAction(
    '[User] get user by username at user management of candidate failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByUsernameAtUserManagementOfRecruiter = createAction(
    '[User] get user by username at user management of recruiter',
    props<{ username: string}>()
);
export const getUserByUsernameAtUserManagementOfRecruiterSuccess = createAction(
    '[User] get user by username at user management of recruiter success',
    props<{ user: User}>()
);
export const getUserByUsernameAtUserManagementOfRecruiterFailure = createAction(
    '[User] get user by username at user management of recruiter failure',
    props<{ errorMessage: string}>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserByUsernameAtUserManagementOfAdmin = createAction(
    '[User] get user by username at user management of admin',
    props<{ username: string}>()
);
export const getUserByUsernameAtUserManagementOfAdminSuccess = createAction(
    '[User] get user by username at user management of admin success',
    props<{ user: User}>()
);
export const getUserByUsernameAtUserManagementOfAdminFailure = createAction(
    '[User] get user by username at user management of admin failure',
    props<{ errorMessage: string}>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateUserAtUserManagement = createAction(
    '[User] update user at user management',
    props<{ user: User}>()
);
export const updateUserAtUserManagementSuccess = createAction(
    '[User] update user at user management success',
    props<{ user: User}>()
);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetState = createAction(
    '[User] reset state',
);