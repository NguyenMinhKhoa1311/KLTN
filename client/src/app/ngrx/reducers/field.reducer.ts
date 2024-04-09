import { createReducer, on } from "@ngrx/store";
import { FieldState } from "../states/field.state";
import * as FieldActions from "../actions/field.actions";

export const initualState: FieldState = {
    fieldAtHome: [],
    isGetFieldAtHomeLoading: false,
    isGetFieldAtHomeSuccess: false,
    getFieldAtHomeError: '',

    fieldNoLimitAtJob: [],
    isGetAllNoLimitLoading: false,
    isGetAllNoLimitSuccess: false,
    getAllNoLimitError: '',

    fieldNoLimitAtCreateProfile: [],
    isGetAllNoLimitAtCreateProfileLoading: false,
    isGetAllNoLimitAtCreateProfileSuccess: false,
    getAllNoLimitAtCreateProfileError: '',

    fieldNoLimitAtCreateJob: [],    
    isGetAllNoLimitAtCreateJobLoading: false,
    isGetAllNoLimitAtCreateJobSuccess: false,
    getAllNoLimitAtCreateJobError: '',

    fieldNoLimitAtProfile: [],
    isGetAllNoLimitAtProfileLoading: false,
    isGetAllNoLimitAtProfileSuccess: false,
    getAllNoLimitAtProfileError: '',

    fieldNoLimitAtJobDetail: [],
    isGetAllNoLimitAtJobDetailLoading: false,
    isGetAllNoLimitAtJobDetailSuccess: false,
    getAllNoLimitAtJobDetailError: ''
}

export const fieldReducer = createReducer(
    initualState,
    on(FieldActions.getFieldAtHome, (state,action) =>{
        return {
            ...state,
            isGetFieldAtHomeLoading: true,
            isGetFieldAtHomeSuccess: false,
            getFieldAtHomeError: ''
        }
    }),
    on(FieldActions.getFieldAtHomeSuccess, (state, action) =>{
        return {
            ...state,
            fieldAtHome: action.fields,
            isGetFieldAtHomeLoading: false,
            isGetFieldAtHomeSuccess: true,
            getFieldAtHomeError: ''
        }
    }),
    on(FieldActions.getFieldAtHomeFailure, (state, action) =>{
        return {
            ...state,
            isGetFieldAtHomeLoading: false,
            isGetFieldAtHomeSuccess: false,
            getFieldAtHomeError: action.err
        }
    }),
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(FieldActions.getAllNoLimit, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitLoading: true,
            isGetAllNoLimitSuccess: false,
            getAllNoLimitError: ''
        }
    }),
    on(FieldActions.getAllNoLimitSuccess, (state, action) =>{
        return {
            ...state,
            fieldNoLimitAtJob: action.fields,
            isGetAllNoLimitLoading: false,
            isGetAllNoLimitSuccess: true,
            getAllNoLimitError: ''
        }
    }),
    on(FieldActions.getAllNoLimitFailure, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitLoading: false,
            isGetAllNoLimitSuccess: false,
            getAllNoLimitError: action.err
        }
    }),


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(FieldActions.getAllNoLimitAtCreaetProfile, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtCreateProfileLoading: true,
            isGetAllNoLimitAtCreateProfileSuccess: false,
            getAllNoLimitAtCreateProfileError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtCreaetProfileSuccess, (state, action) =>{
        return {
            ...state,
            fieldNoLimitAtCreateProfile: action.fields,
            isGetAllNoLimitAtCreateProfileLoading: false,
            isGetAllNoLimitAtCreateProfileSuccess: true,
            getAllNoLimitAtCreateProfileError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtCreaetProfileFailure, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtCreateProfileLoading: false,
            isGetAllNoLimitAtCreateProfileSuccess: false,
            getAllNoLimitAtCreateProfileError: action.err
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(FieldActions.getAllNoLimitAtCreateJob, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtCreateJobLoading: true,
            isGetAllNoLimitAtCreateJobSuccess: false,
            getAllNoLimitAtCreateJobError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtCreateJobSuccess, (state, action) =>{
        return {
            ...state,
            fieldNoLimitAtCreateJob: action.fields,
            isGetAllNoLimitAtCreateJobLoading: false,
            isGetAllNoLimitAtCreateJobSuccess: true,
            getAllNoLimitAtCreateJobError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtCreateJobFailure, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtCreateJobLoading: false,
            isGetAllNoLimitAtCreateJobSuccess: false,
            getAllNoLimitAtCreateJobError: action.err
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(FieldActions.getAllNoLimitAtProfile, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtProfileLoading: true,
            isGetAllNoLimitAtProfileSuccess: false,
            getAllNoLimitAtProfileError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtProfileSuccess, (state, action) =>{
        return {
            ...state,
            fieldNoLimitAtProfile: action.fields,
            isGetAllNoLimitAtProfileLoading: false,
            isGetAllNoLimitAtProfileSuccess: true,
            getAllNoLimitAtProfileError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtProfileFailure, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtProfileLoading: false,
            isGetAllNoLimitAtProfileSuccess: false,
            getAllNoLimitAtProfileError: action.err
        }
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(FieldActions.getAllNoLimitAtJobDetail, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtJobDetailLoading: true,
            isGetAllNoLimitAtJobDetailSuccess: false,
            getAllNoLimitAtJobDetailError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtJobDetailSuccess, (state, action) =>{
        return {
            ...state,
            fieldNoLimitAtJobDetail: action.fields,
            isGetAllNoLimitAtJobDetailLoading: false,
            isGetAllNoLimitAtJobDetailSuccess: true,
            getAllNoLimitAtJobDetailError: ''
        }
    }),
    on(FieldActions.getAllNoLimitAtJobDetailFailure, (state, action) =>{
        return {
            ...state,
            isGetAllNoLimitAtJobDetailLoading: false,
            isGetAllNoLimitAtJobDetailSuccess: false,
            getAllNoLimitAtJobDetailError: action.err
        }
    })


)