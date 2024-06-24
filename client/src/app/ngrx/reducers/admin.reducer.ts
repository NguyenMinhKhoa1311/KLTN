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
    
)