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