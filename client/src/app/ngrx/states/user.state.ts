import { User } from "../../models/user.model";

export interface UserState{
    isCreateWithGoogleAtLoginLoading: boolean;
    isCreateWithGoogleAtLoginSuccess: boolean;
    cerateWithGoogleAtLoginError: string;

    isGetByUsernameWithGoogleAtLoginLoading: boolean;
    isGetByUsernameWithGoogleAtLoginSuccess: boolean;
    getByUsernameWithGoogleAtLoginError: string;
    userTakenByUsernameWithGoogleAtLogin: User;
}