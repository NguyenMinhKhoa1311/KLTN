import { User } from "../../models/user.model";

export interface UserState{
    isCreateWithGoogleAtLoginLoading: boolean;
    isCreateWithGoogleAtLoginSuccess: boolean;
    cerateWithGoogleAtLoginError: string;

    isGetByUsernameWithGoogleAtLoginLoading: boolean;
    isGetByUsernameWithGoogleAtLoginSuccess: boolean;
    getByUsernameWithGoogleAtLoginError: string;
    userTakenByUsernameWithGoogleAtLogin: User;


    isCreateWithGoogleAtRegisterLoading: boolean;
    isCreateWithGoogleAtRegisterSuccess: boolean;
    createWithGoogleAtRegisterError: string;

    isGetByUsernameWithGoogleAtRegisterLoading: boolean;
    isGetByUsernameWithGoogleAtRegisterSuccess: boolean;
    getByUsernameWithGoogleAtRegisterError: string;
    userTakenByUsernameWithGoogleAtRegister: User;

    isGetByUsernameAtCreateProfileLoading: boolean;
    isGetByUsernameAtCreateProfileSuccess: boolean;
    getByUsernameAtCreateProfileError: string;
    userTakenByUsernameAtCreateProfile: User;
}