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

    isChangePassOfCandidateLoading: boolean;
    isChangePassOfCandidateSuccess: boolean;
    changePassOfCandidateError: string;
    userChangedPassOfCandidate: User;

    isChangePassOfRecruiterLoading: boolean;
    isChangePassOfRecruiterSuccess: boolean;
    changePassOfRecruiterError: string;
    userChangedPassOfRecruiter: User;

    isChangePassOfAdminWithoutTokenLoading: boolean;
    isChangePassOfAdminWithoutTokenSuccess: boolean;
    changePassOfAdminWithoutTokenError: string;
    userChangedPassOfAdminWithoutToken: User;

    isChangePassOfCandidateWithoutTokenLoading: boolean;
    isChangePassOfCandidateWithoutTokenSuccess: boolean;
    changePassOfCandidateWithoutTokenError: string;
    userChangedPassOfCandidateWithoutToken: User;

    isChangePassOfRecruiterWithoutTokenLoading: boolean;
    isChangePassOfRecruiterWithoutTokenSuccess: boolean;
    changePassOfRecruiterWithoutTokenError: string;
    userChangedPassOfRecruiterWithoutToken: User;

    isGetByUsernameAtUserManagementOfCandidateLoading: boolean;
    isGetByUsernameAtUserManagementOfCandidateSuccess: boolean;
    getByUsernameAtUserManagementOfCandidateError: string;
    userTakenByUsernameAtUserManagementOfCandidate: User;

    isGetByUsernameAtUserManagementOfRecruiterLoading: boolean;
    isGetByUsernameAtUserManagementOfRecruiterSuccess: boolean;
    getByUsernameAtUserManagementOfRecruiterError: string;
    userTakenByUsernameAtUserManagementOfRecruiter: User;

    isGetByUsernameAtUserManagementOfAdminLoading: boolean;
    isGetByUsernameAtUserManagementOfAdminSuccess: boolean;
    getByUsernameAtUserManagementOfAdminError: string;
    userTakenByUsernameAtUserManagementOfAdmin: User;

    isGetByGmailOfAdminAtRegisterLoading: boolean;
    isGetByGmailOfAdminAtRegisterSuccess: boolean;
    getByGmailOfAdminAtRegisterError: string;
    userTakenByGmailOfAdminAtRegister: User;

    isCreateUserOfAdminAtRegisterLoading: boolean;
    isCreateUserOfAdminAtRegisterSuccess: boolean;
    createUserOfAdminAtRegisterError: string;
    userCreatedOfAdminAtRegister: User;

    isGetByGmailOfAdminWithAccountAtRegisterLoading: boolean;
    isGetByGmailOfAdminWithAccountAtRegisterSuccess: boolean;
    getByGmailOfAdminWithAccountAtRegisterError: string;
    userTakenByGmailOfAdminWithAccountAtRegister: User;

    isGetByUsernameOfAdminAtLoginLoading: boolean;
    isGetByUsernameOfAdminAtLoginSuccess: boolean;
    getByUsernameOfAdminAtLoginError: string;
    userTakenByUsernameOfAdminAtLogin: User;

    isCreateUserOfAdminAtLoginLoading: boolean;
    isCreateUserOfAdminAtLoginSuccess: boolean;
    createUserOfAdminAtLoginError: string;
    userCreatedOfAdminAtLogin: User;

    isGetByUsernameandPasswordOfAdminAtLoginLoading: boolean;
    isGetByUsernameandPasswordOfAdminAtLoginSuccess: boolean;
    getByUsernameandPasswordOfAdminAtLoginError: string;
    userTakenByUsernameandPasswordOfAdminAtLogin: User;
    

    
    

}