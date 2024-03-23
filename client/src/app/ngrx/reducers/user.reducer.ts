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
)