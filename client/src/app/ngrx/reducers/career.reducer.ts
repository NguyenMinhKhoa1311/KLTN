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
    getByFieldNameAtJobError: ''
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
    })
)