import { createReducer, on } from "@ngrx/store";
import { Admin } from "../../models/admin.model";
import { AdminState } from "../states/admin.state";
import * as AdminActions from '../actions/admin.actions';

export const initialState: AdminState = {
    isCreateAtRegisterLoading: false,
    isCreateAtRegisterSuccess: false,
    createAtRegisterError: '',
    admincreatedAtRegister: <Admin>{},

    isGetBy_idAtRegisterLoading: false,
    isGetBy_idAtRegisterSuccess: false,
    getBy_idAtRegisterError: '',
    adminGetBy_idAtRegister: <Admin>{},

    isGetByUserAtLoginLoading: false,
    isGetByUserAtLoginSuccess: false,
    getByUserAtLoginError: '',
    adminGetByUserAtLogin: <Admin>{},

    adminGetByUserAtRegister: <Admin>{},
    isGetByUserAtRegisterLoading: false,
    isGetByUserAtRegisterSuccess: false,
    getByUserAtRegisterError: '',

    isLoginAtLogin: false,


};

export const  adminReducer = createReducer(
    initialState,
    on(AdminActions.createAtRegister, (state,action) => {
        return {
            ...state,
            isCreateAtRegisterLoading: true,
            isCreateAtRegisterSuccess: false,
            createAtRegisterError: '',
        }
    }),
    on(AdminActions.createAtRegisterSuccess, (state, action) => {
        return {
            ...state,
            isCreateAtRegisterLoading: false,
            isCreateAtRegisterSuccess: true,
            admincreatedAtRegister: action.admin,
        }
    }),
    on(AdminActions.createAtRegisterFailure, (state, action) => {
        return {
            ...state,
            isCreateAtRegisterLoading: false,
            isCreateAtRegisterSuccess: false,
            createAtRegisterError: action.errorMessage,
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(AdminActions.getBy_idAtRegister, (state,action) => {
        console.log('action', action);
        
        return {
            ...state,
            isGetBy_idAtRegisterLoading: true,
            isGetBy_idAtRegisterSuccess: false,
            getBy_idAtRegisterError: '',
        }
    }),
    on(AdminActions.getBy_idAtRegisterSuccess, (state, action) => {
        console.log('action', action);
        
        return {
            ...state,
            isGetBy_idAtRegisterLoading: false,
            isGetBy_idAtRegisterSuccess: true,
            adminGetBy_idAtRegister: action.admin,
        }
    }),
    on(AdminActions.getBy_idAtRegisterFailure, (state, action) => {
        console.log('action', action);
        
        return {
            ...state,
            isGetBy_idAtRegisterLoading: false,
            isGetBy_idAtRegisterSuccess: false,
            getBy_idAtRegisterError: action.errorMessage,
        }
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(AdminActions.getByUserAtLogin, (state,action) => {
        return {
            ...state,
            isGetByUserAtLoginLoading: true,
            isGetByUserAtLoginSuccess: false,
            getByUserAtLoginError: '',
        }
    }),
    on(AdminActions.getByUserAtLoginSuccess, (state, action) => {
        return {
            ...state,
            isGetByUserAtLoginLoading: false,
            isGetByUserAtLoginSuccess: true,
            adminGetByUserAtLogin: action.admin,
        }
    }),
    on(AdminActions.getByUserAtLoginFailure, (state, action) => {
        return {
            ...state,
            isGetByUserAtLoginLoading: false,
            isGetByUserAtLoginSuccess: false,
            getByUserAtLoginError: action.errorMessage,
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(AdminActions.getByUserAtRegister, (state,action) => {
        return {
            ...state,
            isGetByUserAtRegisterLoading: true,
            isGetByUserAtRegisterSuccess: false,
            getByUserAtRegisterError: '',
        }
    }),
    on(AdminActions.getByUserAtRegisterSuccess, (state, action) => {
        return {
            ...state,
            isGetByUserAtRegisterLoading: false,
            isGetByUserAtRegisterSuccess: true,
            adminGetByUserAtRegister: action.admin,
        }
    }),
    on(AdminActions.getByUserAtRegisterFailure, (state, action) => {
        return {
            ...state,
            isGetByUserAtRegisterLoading: false,
            isGetByUserAtRegisterSuccess: false,
            getByUserAtRegisterError: action.errorMessage,
        }
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(AdminActions.isLoginAtLogin, (state,action) => {
        return {
            ...state,
            isLoginAtLogin: true,
        }
    }),
    on(AdminActions.resetIsLoginAtLogin, (state,action) => {
        return {
            ...state,
            isLoginAtLogin: false,
        }
    }),

    
)