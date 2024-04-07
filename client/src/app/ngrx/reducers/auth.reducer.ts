
import { UserFirebase } from "../../models/userFirebase.model";
import * as LoginActions from '../actions/auth.actions';
import { AuthState } from '../states/auth.state';
import { createReducer, on } from '@ngrx/store';

export const initialState: AuthState = {
    user: <UserFirebase>{},
    isLoginLoading: false,
    isLoginSuccessfull: false,
    loginErrorMessage: '',

    isLogoutLoading: false,
    isLogoutSuccessfull: false,
    logoutErrorMessage: '',

    isLoginAtRegisterLoading: false,
    isLoginAtRegisterSuccessfull: false,
    loginAtRegisterErrorMessage: '',
    userAtregister: <UserFirebase>{},
};

export const authReducer = createReducer(
    initialState,
    on(LoginActions.login, (state, action) => {
      console.log('login action');
      let newState: AuthState = {
        ...state,
        isLoginLoading: true,
        isLoginSuccessfull: false,
        loginErrorMessage: '',
      };
      return newState;
    }),
  
    on(LoginActions.loginSuccess, (state, action) => {
      console.log('login success');
      
      let newState: AuthState = {
        ...state,
        isLoginLoading: false,
        isLoginSuccessfull: true,
        loginErrorMessage: '',
        user: action.user
      };
      return newState;
    }),
  
    on(LoginActions.loginFailure, (state, action) => {
      console.log('login failure');
      
      let newState: AuthState = {
        ...state,
        isLoginLoading: false,
        isLoginSuccessfull: false,
        loginErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.loginAtRegister, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginAtRegisterLoading: true,
        isLoginAtRegisterSuccessfull: false,
        loginAtRegisterErrorMessage: '',
      };
      return newState;
    }),

    on(LoginActions.loginAtRegisterSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        userAtregister: action.user,
        isLoginAtRegisterLoading: false,
        isLoginAtRegisterSuccessfull: true,
        loginAtRegisterErrorMessage: '',
      };
      return newState;
    }),

    on(LoginActions.loginAtRegisterFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginAtRegisterLoading: false,
        isLoginAtRegisterSuccessfull: false,
        loginAtRegisterErrorMessage: action.errorMessage,
      };
      return newState;
    }),
  

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.logout, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginLoading: true,
        isLoginSuccessfull: false,
        loginErrorMessage: '',
      };
      return newState;
    }),
  
    on(LoginActions.logoutSuccess, (state, action) => {
      console.log('logout success');
      
      let newState: AuthState = {
        ...state,
        isLogoutLoading: false,
        isLogoutSuccessfull: true,
        logoutErrorMessage: '',
      };
      return newState;
    }),
  
    on(LoginActions.logoutFailure, (state, action) => {
      console.log('logout failure'+ action.errorMessage);
      
      let newState: AuthState = {
        ...state,
        isLogoutLoading: false,
        isLogoutSuccessfull: false,
        logoutErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.storedUserFirebase, (state, { userFirebase, type }) => {
      console.log(type);
      return {
        ...state,
        userFirebase,
      };
    }),
    on(LoginActions.resetState, (state, action) => {
      let newState: AuthState = {
        ...state,
        user: <UserFirebase>{},
        isLoginLoading: false,
        isLoginSuccessfull: false,
        loginErrorMessage: '',
        isLogoutLoading: false,
        isLogoutSuccessfull: false,
        logoutErrorMessage: ''
      };
      return newState;
    })
  );
