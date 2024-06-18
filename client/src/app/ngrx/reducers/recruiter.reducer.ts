import { createReducer, on } from "@ngrx/store";
import { Recruiter } from "../../models/recruiter.model";
import { RecruiterState } from "../states/recruiter.state";
import * as RecruiterActions from "../actions/recruiter.actions";

export const initialState: RecruiterState = {
    isGetByUserAtLoginLoading: false,
    isGetByUserAtLoginSuccess: false,
    getByUserAtLoginError: '',
    recruiterTakenByUserAtLogin: <Recruiter>{},

    isGetByUserAtRegisterSuccess: false,
    isGetByUserAtRegisterLoading: false,
    getByUserAtRegisterError: '',
    recruiterTakenByUserAtRegister: <Recruiter>{},

    isCreateRecruiterAtRegisterLoading: false,
    isCreateRecruiterAtRegisterSuccess: false,
    createRecruiterAtRegisterError: '',
    recruiterCreatedAtRegister: <Recruiter>{},

    isGetAllAtManageRecruiterLoading: false,
    isGetAllAtManageRecruiterSuccess: false,
    getAllAtManageRecruiterError: '',
    recruitersTakenAllAtManageRecruiter: [],

    isUpdateAtProfileLoading: false,
    isUpdateAtProfileSuccess: false,
    updateAtProfileError: '',
    recruiterUpdatedAtProfile: <Recruiter>{},

    isGetBy_idAtProfileLoading: false,
    isGetBy_idAtProfileSuccess: false,
    getBy_idAtProfileError: '',
    recruiterTakenBy_idAtProfile: <Recruiter>{},

};

export const recruiterReducer = createReducer(
    initialState,
    on(RecruiterActions.getByUserAtLogin,(state,action)=>{
        return{
            ...state,
            isGetByUserAtLoginLoading: true,
            isGetByUserAtLoginSuccess: false,
            getByUserAtLoginError: '',
        }
    }),
    on(RecruiterActions.getByUserAtLoginSuccess,(state,action)=>{
        return{
            ...state,
            isGetByUserAtLoginLoading: false,
            isGetByUserAtLoginSuccess: true,
            getByUserAtLoginError: '',
            recruiterTakenByUserAtLogin: action.recruiter
        }
    }),
    on(RecruiterActions.getByUserAtLoginFailure,(state,action)=>{
        return{
            ...state,
            isGetByUserAtLoginLoading: false,
            isGetByUserAtLoginSuccess: false,
            getByUserAtLoginError: action.errorMessage,
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruiterActions.getByUserAtRegister,(state,action)=>{
        return{
            ...state,
            isGetByUserAtRegisterLoading: true,
            isGetByUserAtRegisterSuccess: false,
            getByUserAtRegisterError: '',
        }
    }),
    on(RecruiterActions.getByUserAtRegisterSuccess,(state,action)=>{
        return{
            ...state,
            isGetByUserAtRegisterLoading: false,
            isGetByUserAtRegisterSuccess: true,
            getByUserAtRegisterError: '',
            recruiterTakenByUserAtRegister: action.recruiter
        }
    }),
    on(RecruiterActions.getByUserAtRegisterFailure,(state,action)=>{
        return{
            ...state,
            isGetByUserAtRegisterLoading: false,
            isGetByUserAtRegisterSuccess: false,
            getByUserAtRegisterError: action.errorMessage,
        }
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruiterActions.createRecruiterAtRegister,(state,action)=>{
        return{
            ...state,
            isCreateRecruiterAtRegisterLoading: true,
            isCreateRecruiterAtRegisterSuccess: false,
            createRecruiterAtRegisterError: '',
        }
    }),
    on(RecruiterActions.createRecruiterAtRegisterSuccess,(state,action)=>{
        return{
            ...state,
            isCreateRecruiterAtRegisterLoading: false,
            isCreateRecruiterAtRegisterSuccess: true,
            createRecruiterAtRegisterError: '',
            recruiterCreatedAtRegister: action.recruiter
        }
    }),
    on(RecruiterActions.createRecruiterAtRegisterFailure,(state,action)=>{
        return{
            ...state,
            isCreateRecruiterAtRegisterLoading: false,
            isCreateRecruiterAtRegisterSuccess: false,
            createRecruiterAtRegisterError: action.errorMessage,
        }
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruiterActions.getAllAtManageRecruiter,(state,action)=>{
        return{
            ...state,
            isGetAllAtManageRecruiterLoading: true,
            isGetAllAtManageRecruiterSuccess: false,
            getAllAtManageRecruiterError: '',
        }
    }),
    on(RecruiterActions.getAllAtManageRecruiterSuccess,(state,action)=>{
        return{
            ...state,
            isGetAllAtManageRecruiterLoading: false,
            isGetAllAtManageRecruiterSuccess: true,
            getAllAtManageRecruiterError: '',
            recruitersTakenAllAtManageRecruiter: action.recruiters
        }
    }),
    on(RecruiterActions.getAllAtManageRecruiterFailure,(state,action)=>{
        return{
            ...state,
            isGetAllAtManageRecruiterLoading: false,
            isGetAllAtManageRecruiterSuccess: false,
            getAllAtManageRecruiterError: action.errorMessage,
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruiterActions.updateAtProfile,(state,action)=>{
        return{
            ...state,
            isUpdateAtProfileLoading: true,
            isUpdateAtProfileSuccess: false,
            updateAtProfileError: '',
        }
    }),
    on(RecruiterActions.updateAtProfileSuccess,(state,action)=>{
        return{
            ...state,
            isUpdateAtProfileLoading: false,
            isUpdateAtProfileSuccess: true,
            updateAtProfileError: '',
            recruiterUpdatedAtProfile: action.recruiter
        }
    }),
    on(RecruiterActions.updateAtProfileFailure,(state,action)=>{
        return{
            ...state,
            isUpdateAtProfileLoading: false,
            isUpdateAtProfileSuccess: false,
            updateAtProfileError: action.errorMessage,
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruiterActions.getBy_idAtProfile,(state,action)=>{
        return{
            ...state,
            isGetBy_idAtProfileLoading: true,
            isGetBy_idAtProfileSuccess: false,
            getBy_idAtProfileError: '',
        }
    }),
    on(RecruiterActions.getBy_idAtProfileSuccess,(state,action)=>{
        return{
            ...state,
            isGetBy_idAtProfileLoading: false,
            isGetBy_idAtProfileSuccess: true,
            getBy_idAtProfileError: '',
            recruiterTakenBy_idAtProfile: action.recruiter
        }
    }),
    on(RecruiterActions.getBy_idAtProfileFailure,(state,action)=>{
        return{
            ...state,
            isGetBy_idAtProfileLoading: false,
            isGetBy_idAtProfileSuccess: false,
            getBy_idAtProfileError: action.errorMessage,
        }
    }),

);