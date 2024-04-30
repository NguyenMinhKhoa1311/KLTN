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

    isGetByUsernameWithAccountAtRegisterLoading: boolean;
    isGetByUsernameWithAccountAtRegisterSuccess: boolean;
    getByUsernameWithAccountAtRegisterError: string;
    userTakenByUsernameWithAccountAtRegister: User;

    isGetUserByUsernameAndPasswordAtLoginLoading: boolean;
    isGetUserByUsernameAndPasswordAtLoginSuccess: boolean;
    getUserByUsernameAndPasswordAtLoginError: string;
    userTakenByUsernameAndPasswordAtLogin: User;

    isGetByUsernameOfRecruiterAtLoginLoading: boolean;
    isGetByUsernameOfRecruiterAtLoginSuccess: boolean;
    getByUsernameOfRecruiterAtLoginError: string;
    userTakenByUsernameOfRecruiterAtLogin: User;


    isCreateUserOfRecruiterAtLoginSuccess: boolean;
    isCreateUserOfRecruiterAtLoginLoading: boolean;
    createUserOfRecruiterAtLoginError: string;
    usercreatedOfRecruiterAtLogin: User;
    

    isGetByUsernameAndPasswordOfRecruiterAtLoginSuccess: boolean;
    isGetByUsernameAndPasswordOfRecruiterAtLoginLoading: boolean;
    getByUsernameAndPasswordOfRecruiterAtLoginError: string;
    userTakenByUsernameAndPasswordOfRecruiterAtLogin: User;



    isGetByUsernameOfRecruiterAtRegisterLoading: boolean;
    isGetByUsernameOfRecruiterAtRegisterSuccess: boolean;
    getByUsernameOfRecruiterAtRegisterError: string;
    userTakenByUsernameOfRecruiterAtRegister: User;

    isCreateUserOfRecruiterAtRegisterLoading: boolean;
    isCreateUserOfRecruiterAtRegisterSuccess: boolean;
    createUserOfRecruiterAtRegisterError: string;
    usercreatedOfRecruiterAtRegister: User;

    isGetByUsernameOfRecruiterWithAccountAtRegisterSuccess: boolean;
    isGetByUsernameOfRecruiterWithAccountAtRegisterLoading: boolean;
    getByUsernameOfRecruiterWithAccountAtRegisterError: string;
    userTakenByUsernameOfRecruiterWithAccountAtRegister: User;

}