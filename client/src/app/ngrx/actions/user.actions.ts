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