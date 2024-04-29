
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

    isLoginOfRecruiterAtLoginLoading: false,
    isLoginOfRecruiterAtLoginSuccessfull: false,
    loginOfRecruiterAtLoginErrorMessage: '',
    userOfRecruiterAtLogin: <UserFirebase>{},

    isLoginOfRecruiterAtRegisterLoading: false,
    isLoginOfRecruiterAtRegisterSuccessfull: false,
    loginOfRecruiterAtRegisterErrorMessage: '',
    userOfRecruiterAtRegister: <UserFirebase>{},

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

      return initialState;
    }),


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.loginOfRecruiterAtLogin, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginOfRecruiterAtLoginLoading: true,
        isLoginOfRecruiterAtLoginSuccessfull: false,
        loginOfRecruiterAtLoginErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfRecruiterAtLoginSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        userOfRecruiterAtLogin: action.user,
        isLoginOfRecruiterAtLoginLoading: false,
        isLoginOfRecruiterAtLoginSuccessfull: true,
        loginOfRecruiterAtLoginErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfRecruiterAtLoginFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginOfRecruiterAtLoginLoading: false,
        isLoginOfRecruiterAtLoginSuccessfull: false,
        loginOfRecruiterAtLoginErrorMessage: action.errorMessage,
      };
      return newState;
    }),



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.loginOfRecruiterAtRegister, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginOfRecruiterAtRegisterLoading: true,
        isLoginOfRecruiterAtRegisterSuccessfull: false,
        loginOfRecruiterAtRegisterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfRecruiterAtRegisterSuccess, (state, action) => {
      console.log(action.type);
      let newState: AuthState = {
        ...state,
        userOfRecruiterAtRegister: action.user,
        isLoginOfRecruiterAtRegisterLoading: false,
        isLoginOfRecruiterAtRegisterSuccessfull: true,
        loginOfRecruiterAtRegisterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfRecruiterAtRegisterFailure, (state, action) => {
      console.log(action.type);
      
      let newState: AuthState = {
        ...state,
        isLoginOfRecruiterAtRegisterLoading: false,
        isLoginOfRecruiterAtRegisterSuccessfull: false,
        loginOfRecruiterAtRegisterErrorMessage: action.errorMessage,
      };
      return newState;
    }),


  );
