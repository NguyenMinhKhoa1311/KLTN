import { createReducer, on } from "@ngrx/store";
import { CareerState } from "../states/career.state";
import * as CareerActions from "../actions/career.actions";

export const initialState: CareerState = {
    careersTakenByGetAllAtJob: [],
    isGetAllAtJobLoading: false,
    isGetAllAtJobSuccess: false,
    getAllAtJobError: '',
    
    careersTakenByGetByFieldNameAtJob: [] ,
    isGetByFieldNameAtJobLoading: false,
    isGetByFieldNameAtJobSuccess: false,
    getByFieldNameAtJobError: '',

    careersTakenByGetAllAtCreateProfile: [],
    isGetAllAtCreateProfileLoading: false,
    isGetAllAtCreateProfileSuccess: false,
    getAllAtCreateProfileError: '',

    careersTakenByGetByFieldAtProfile: [],
    isGetByFieldAtProfileLoading: false,
    isGetByFieldAtProfileSuccess: false,
    getByFieldAtProfileError: '',

    isGetAllAtCreateJobLoading: false,
    isGetAllAtCreateJobSuccess: false,
    careersTakenByGetAllAtCreateJob: [],
    getAllAtCreateJobError: '',

    isGetByFieldAtCreateJobLoading: true,
    isGetByFieldAtCreateJobSuccess: false,
    careersTakenByGetByFieldAtCreateJob: [],
    getByFieldAtCreateJobError: ''

}

export const careerReducer = createReducer(
    initialState,
    on(CareerActions.getAllAtJobs,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: true,
            isGetAllAtJobSuccess: false,
            getAllAtJobError: ''
        }
    }),
    on(CareerActions.getAllAtJobsSuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: false,
            isGetAllAtJobSuccess: true,
            careersTakenByGetAllAtJob: action.careers
        }
    }),
    on(CareerActions.getAllAtJobsFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: false,
            isGetAllAtJobSuccess: false,
            getAllAtJobError: action.error
        }
    }),


    

    on(CareerActions.getByFieldNameAtJob,(state,action)=>{
        return {
            ...state,
            isGetByFieldNameAtJobLoading: true,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: ''
        }
    }),
    on(CareerActions.getByFieldNameAtJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtJob: action.careers,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: true,
            careersTakenByGetByFieldNameAtJob: action.careers
        }
    }),
    on(CareerActions.getByFieldNameAtJobFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: action.error
        }
    }),




    on(CareerActions.getAllAtCreateProfile,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateProfileLoading: true,
            isGetAllAtCreateProfileSuccess: false,
            getAllAtCreateProfileError: ''
        }
    }),
    on(CareerActions.getAllAtCreateProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtCreateProfile: action.careers,
            isGetAllAtCreateProfileLoading: false,
            isGetAllAtCreateProfileSuccess: true
        }
    }),
    on(CareerActions.getAllAtCreateProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateProfileLoading: false,
            isGetAllAtCreateProfileSuccess: false,
            getAllAtCreateProfileError: action.error
        }
    }),

    
    on(CareerActions.getByFieldAtProfile,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtProfileLoading: true,
            isGetByFieldAtProfileSuccess: false,
            getByFieldAtProfileError: ''
        }
    }),
    on(CareerActions.getByFieldAtProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtProfile: action.careers,
            isGetByFieldAtProfileLoading: false,
            isGetByFieldAtProfileSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtProfileLoading: false,
            isGetByFieldAtProfileSuccess: false,
            getByFieldAtProfileError: action.error
        }
    }),





    on(CareerActions.getAllAtCreateJob,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateJobLoading: true,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: ''
        }
    }),
    on(CareerActions.getAllAtCreateJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtCreateJob: action.careers,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: true
        }
    }),
    on(CareerActions.getAllAtCreateJobFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: action.error
        }
    }),




    on(CareerActions.getByFieldAtCreateJob,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtCreateJobLoading: true,
            isGetByFieldAtCreateJobSuccess: false,
            getByFieldAtCreateJobError: ''
        }
    }),
    on(CareerActions.getByFieldAtCreateJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtCreateJob: action.careers,
            isGetByFieldAtCreateJobLoading: false,
            isGetByFieldAtCreateJobSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtCreateJobFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtCreateJobLoading: false,
            isGetByFieldAtCreateJobSuccess: false,
            getByFieldAtCreateJobError: action.error
        }
    })
)