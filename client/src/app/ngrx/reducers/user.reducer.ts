import { createReducer, on } from "@ngrx/store";
import { UserState } from "../states/user.state";
import * as UserActions from "../actions/user.actions";
import { User } from "../../models/user.model";

export const initialState: UserState ={
    
    isCreateWithGoogleAtLoginLoading: false,
    isCreateWithGoogleAtLoginSuccess: false,
    cerateWithGoogleAtLoginError: '',

    isGetByUsernameWithGoogleAtLoginLoading: false,
    isGetByUsernameWithGoogleAtLoginSuccess: false,
    getByUsernameWithGoogleAtLoginError: '',
    userTakenByUsernameWithGoogleAtLogin: <User>{},

    isCreateWithGoogleAtRegisterLoading: false,
    isCreateWithGoogleAtRegisterSuccess: false,
    createWithGoogleAtRegisterError: '',

    isGetByUsernameWithGoogleAtRegisterLoading: false,
    isGetByUsernameWithGoogleAtRegisterSuccess: false,
    getByUsernameWithGoogleAtRegisterError: '',
    userTakenByUsernameWithGoogleAtRegister: <User>{},

    isGetByUsernameAtCreateProfileLoading: false,
    isGetByUsernameAtCreateProfileSuccess: false,
    getByUsernameAtCreateProfileError: '',
    userTakenByUsernameAtCreateProfile: <User>{},

};

export const userReducer = createReducer(
    initialState,
    on(UserActions.createWithGoogleAtLogin, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: true,
            isCreateWithGoogleAtLoginSuccess: false,
            cerateWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtLoginSuccess, (state, action) => {
        console.log(action.type);
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: false,
            isCreateWithGoogleAtLoginSuccess: true,
            cerateWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtLoginFailure, (state, action) => {
        console.log(action.type, action.errorMessage);
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: false,
            isCreateWithGoogleAtLoginSuccess: false,
            cerateWithGoogleAtLoginError: action.errorMessage,
        };
        return newState;
    }),






    on(UserActions.getUserByGmailWithGoogleAtLogin, (state, action) => {
        console.log(action.Username);
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: true,
            isGetByUsernameWithGoogleAtLoginSuccess: false,
            getByUsernameWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtLoginSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: false,
            isGetByUsernameWithGoogleAtLoginSuccess: true,
            getByUsernameWithGoogleAtLoginError: '',
            userTakenByUsernameWithGoogleAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtLoginFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: false,
            isGetByUsernameWithGoogleAtLoginSuccess: false,
            getByUsernameWithGoogleAtLoginError: action.errorMessage,
        };
        return newState;
    }),




    on(UserActions.createWithGoogoleAtRegister, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: true,
            isCreateWithGoogleAtRegisterSuccess: false,
            createWithGoogleAtRegisterError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtRegisterSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: false,
            isCreateWithGoogleAtRegisterSuccess: true,
            createWithGoogleAtRegisterError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtRegisterFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: false,
            isCreateWithGoogleAtRegisterSuccess: false,
            createWithGoogleAtRegisterError: action.errorMessage,
        };
        return newState;
    }),




    on(UserActions.getUserByGmailWithGoogleAtRegisterSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: false,
            isGetByUsernameWithGoogleAtRegisterSuccess: true,
            getByUsernameWithGoogleAtRegisterError: '',
            userTakenByUsernameWithGoogleAtRegister: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtRegisterFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: false,
            isGetByUsernameWithGoogleAtRegisterSuccess: false,
            getByUsernameWithGoogleAtRegisterError: action.errorMessage,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtRegister, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: true,
            isGetByUsernameWithGoogleAtRegisterSuccess: false,
            getByUsernameWithGoogleAtRegisterError: '',
        };
        return newState;
    }),




    on(UserActions.getUserByGmailAtCreateProfile, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: true,
            isGetByUsernameAtCreateProfileSuccess: false,
            getByUsernameAtCreateProfileError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByGmailAtCreateProfileSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: false,
            isGetByUsernameAtCreateProfileSuccess: true,
            getByUsernameAtCreateProfileError: '',
            userTakenByUsernameAtCreateProfile: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailAtCreateProfileFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: false,
            isGetByUsernameAtCreateProfileSuccess: false,
            getByUsernameAtCreateProfileError: action.errorMessage,
        };
        return newState;
    }),
)