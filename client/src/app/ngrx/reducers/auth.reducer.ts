
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

    isGetTokenAtLoginOfCandidateLoading: false,
    isGetTokenAtLoginOfCandidateSuccessfull: false,
    getTokenAtLoginOfCandidateErrorMessage: '',
    tokenAtLoginOfCandidate: {},

    isGetTokenAtLoginOfRecruiterLoading: false,
    isGetTokenAtLoginOfRecruiterSuccessfull: false,
    getTokenAtLoginOfRecruiterErrorMessage: '',
    tokenAtLoginOfRecruiter: {},

    isGetTokenAtRegisterOfRecruiterLoading: false,
    isGetTokenAtRegisterOfRecruiterSuccessfull: false,
    getTokenAtRegisterOfRecruiterErrorMessage: '',
    tokenAtRegisterOfRecruiter: {},

    isGetTokenAtRegisterOfCandidateLoading: false,
    isGetTokenAtRegisterOfCandidateSuccessfull: false,
    getTokenAtRegisterOfCandidateErrorMessage: '',
    tokenAtRegisterOfCandidate: {},

    isGetTokenAtUserManagementOfCandidateLoading: false,
    isGetTokenAtUserManagementOfCandidateSuccessfull: false,
    getTokenAtUserManagementOfCandidateErrorMessage: '',
    tokenAtUserManagementOfCandidate: {},

    isGetTokenAtUserManagementOfRecruiterLoading: false,
    isGetTokenAtUserManagementOfRecruiterSuccessfull: false,
    getTokenAtUserManagementOfRecruiterErrorMessage: '',
    tokenAtUserManagementOfRecruiter: {},

    isGetTokenAtUserManagementOfAdminLoading: false,
    isGetTokenAtUserManagementOfAdminSuccessfull: false,
    getTokenAtUserManagementOfAdminErrorMessage: '',
    tokenAtUserManagementOfAdmin: {},

    isGetTokenAtRegisterOfAdminLoading: false,
    isGetTokenAtRegisterOfAdminSuccessfull: false,
    getTokenAtRegisterOfAdminErrorMessage: '',
    tokenAtRegisterOfAdmin: {},

    isLoginAtRegisterOfAdminLoading: false,
    isLoginAtRegisterOfAdminSuccessfull: false,
    loginAtRegisterOfAdminErrorMessage: '',
    userAtregisterOfAdmin: <UserFirebase>{},

    getTokenAtLoginOfAdminErrorMessage: '',
    tokenAtLoginOfAdmin: {},
    isGetTokenAtLoginOfAdminSuccessfull: false,
    isGetTokenAtLoginOfAdminLoading: false,

    isLoginOfAdminAtLoginLoading: false,
    isLoginOfAdminAtLoginSuccessfull: false,
    loginOfAdminAtLoginErrorMessage: '',
    userOfAdminAtLogin: <UserFirebase>{},


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



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtLoginOfCandidate, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfCandidateLoading: true,
        isGetTokenAtLoginOfCandidateSuccessfull: false,
        getTokenAtLoginOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfCandidateSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtLoginOfCandidate: action.res,
        isGetTokenAtLoginOfCandidateLoading: false,
        isGetTokenAtLoginOfCandidateSuccessfull: true,
        getTokenAtLoginOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfCandidateFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfCandidateLoading: false,
        isGetTokenAtLoginOfCandidateSuccessfull: false,
        getTokenAtLoginOfCandidateErrorMessage: action.errorMessage,
      };
      return newState;
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtLoginOfRecruiter, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfRecruiterLoading: true,
        isGetTokenAtLoginOfRecruiterSuccessfull: false,
        getTokenAtLoginOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfRecruiterSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtLoginOfRecruiter: action.res,
        isGetTokenAtLoginOfRecruiterLoading: false,
        isGetTokenAtLoginOfRecruiterSuccessfull: true,
        getTokenAtLoginOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfRecruiterFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfRecruiterLoading: false,
        isGetTokenAtLoginOfRecruiterSuccessfull: false,
        getTokenAtLoginOfRecruiterErrorMessage: action.errorMessage,
      };
      return newState;
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtRegisterOfRecruiter, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfRecruiterLoading: true,
        isGetTokenAtRegisterOfRecruiterSuccessfull: false,
        getTokenAtRegisterOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtRegisterOfRecruiterSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtRegisterOfRecruiter: action.res,
        isGetTokenAtRegisterOfRecruiterLoading: false,
        isGetTokenAtRegisterOfRecruiterSuccessfull: true,
        getTokenAtRegisterOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtRegisterOfRecruiterFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfRecruiterLoading: false,
        isGetTokenAtRegisterOfRecruiterSuccessfull: false,
        getTokenAtRegisterOfRecruiterErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtRegisterOfCandidate, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfCandidateLoading: true,
        isGetTokenAtRegisterOfCandidateSuccessfull: false,
        getTokenAtRegisterOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtRegisterOfCandidateSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtRegisterOfCandidate: action.res,
        isGetTokenAtRegisterOfCandidateLoading: false,
        isGetTokenAtRegisterOfCandidateSuccessfull: true,
        getTokenAtRegisterOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtRegisterOfCandidateFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfCandidateLoading: false,
        isGetTokenAtRegisterOfCandidateSuccessfull: false,
        getTokenAtRegisterOfCandidateErrorMessage: action.errorMessage,
      };
      return newState;
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtUserManagementOfCandidate, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfCandidateLoading: true,
        isGetTokenAtUserManagementOfCandidateSuccessfull: false,
        getTokenAtUserManagementOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfCandidateSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtUserManagementOfCandidate: action.res,
        isGetTokenAtUserManagementOfCandidateLoading: false,
        isGetTokenAtUserManagementOfCandidateSuccessfull: true,
        getTokenAtUserManagementOfCandidateErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfCandidateFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfCandidateLoading: false,
        isGetTokenAtUserManagementOfCandidateSuccessfull: false,
        getTokenAtUserManagementOfCandidateErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtUserManagementOfRecruiter, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfRecruiterLoading: true,
        isGetTokenAtUserManagementOfRecruiterSuccessfull: false,
        getTokenAtUserManagementOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfRecruiterSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtUserManagementOfRecruiter: action.res,
        isGetTokenAtUserManagementOfRecruiterLoading: false,
        isGetTokenAtUserManagementOfRecruiterSuccessfull: true,
        getTokenAtUserManagementOfRecruiterErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfRecruiterFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfRecruiterLoading: false,
        isGetTokenAtUserManagementOfRecruiterSuccessfull: false,
        getTokenAtUserManagementOfRecruiterErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtUserManagementOfAdmin, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfAdminLoading: true,
        isGetTokenAtUserManagementOfAdminSuccessfull: false,
        getTokenAtUserManagementOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfAdminSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtUserManagementOfAdmin: action.res,
        isGetTokenAtUserManagementOfAdminLoading: false,
        isGetTokenAtUserManagementOfAdminSuccessfull: true,
        getTokenAtUserManagementOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtUserManagementOfAdminFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtUserManagementOfAdminLoading: false,
        isGetTokenAtUserManagementOfAdminSuccessfull: false,
        getTokenAtUserManagementOfAdminErrorMessage: action.errorMessage,
      };
      return newState;
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtRegisterOfAdmin, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfAdminLoading: true,
        isGetTokenAtRegisterOfAdminSuccessfull: false,
        getTokenAtRegisterOfAdminErrorMessage: '',
      };
      return newState;
    }
    ),
    on(LoginActions.getTokenAtRegisterOfAdminSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtRegisterOfAdmin: action.res,
        isGetTokenAtRegisterOfAdminLoading: false,
        isGetTokenAtRegisterOfAdminSuccessfull: true,
        getTokenAtRegisterOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtRegisterOfAdminFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtRegisterOfAdminLoading: false,
        isGetTokenAtRegisterOfAdminSuccessfull: false,
        getTokenAtRegisterOfAdminErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.loginOfAdminAtRegister, (state, action) => {
      console.log(action.type);
      
      let newState: AuthState = {
        ...state,
        isLoginAtRegisterOfAdminLoading: true,
        isLoginAtRegisterOfAdminSuccessfull: false,
        loginAtRegisterOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfAdminAtRegisterSuccess, (state, action) => {
      console.log(action.type);
      
      let newState: AuthState = {
        ...state,
        userAtregisterOfAdmin: action.user,
        isLoginAtRegisterOfAdminLoading: false,
        isLoginAtRegisterOfAdminSuccessfull: true,
        loginAtRegisterOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfAdminAtRegisterFailure, (state, action) => {
      action.errorMessage
      let newState: AuthState = {
        ...state,
        isLoginAtRegisterOfAdminLoading: false,
        isLoginAtRegisterOfAdminSuccessfull: false,
        loginAtRegisterOfAdminErrorMessage: action.errorMessage,
      };
      return newState;
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.getTokenAtLoginOfAdmin, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfAdminLoading: true,
        isGetTokenAtLoginOfAdminSuccessfull: false,
        getTokenAtLoginOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfAdminSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        tokenAtLoginOfAdmin: action.res,
        isGetTokenAtLoginOfAdminLoading: false,
        isGetTokenAtLoginOfAdminSuccessfull: true,
        getTokenAtLoginOfAdminErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.getTokenAtLoginOfAdminFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isGetTokenAtLoginOfAdminLoading: false,
        isGetTokenAtLoginOfAdminSuccessfull: false,
        getTokenAtLoginOfAdminErrorMessage: action.errorMessage,
      };
      return newState;
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(LoginActions.loginOfAdminAtLogin, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginOfAdminAtLoginLoading: true,
        isLoginOfAdminAtLoginSuccessfull: false,
        loginOfAdminAtLoginErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfAdminAtLoginSuccess, (state, action) => {
      let newState: AuthState = {
        ...state,
        userOfAdminAtLogin: action.user,
        isLoginOfAdminAtLoginLoading: false,
        isLoginOfAdminAtLoginSuccessfull: true,
        loginOfAdminAtLoginErrorMessage: '',
      };
      return newState;
    }),
    on(LoginActions.loginOfAdminAtLoginFailure, (state, action) => {
      let newState: AuthState = {
        ...state,
        isLoginOfAdminAtLoginLoading: false,
        isLoginOfAdminAtLoginSuccessfull: false,
        loginOfAdminAtLoginErrorMessage: action.errorMessage,
      };
      return newState;
    }),




  );
