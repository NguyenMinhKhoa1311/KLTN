import { createReducer, on } from "@ngrx/store";
import { jobState } from "../states/job.state";
import * as JobActions from "../actions/job.actions"

export const initialState: jobState = {
    jobTakenByFieldAtHome: [],
    isGetByFieldAtHomeLoading: false,
    isGetByFieldAtHomeSuccess: false,
    getByFieldAtHomeError: "",

    jobTakenByCareerAtHome: [],
    isGetByCareerAtHomeLoading: false,
    isGetByCareerAtHomeSuccess: false,
    getByCareerAtHomeError: "",
}

export const jobReducer = createReducer(
    initialState,
    on(JobActions.getByFieldAtHome,(state,action)=>{
        return{
            ...state,
            isGetByFieldAtHomeLoading: true,
            isGetByFieldAtHomeSuccess: false,
            getByFieldAtHomeError: "",
        }
    }),
    on(JobActions.getByFieldAtHomeSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByFieldAtHome: state.jobTakenByFieldAtHome.concat(action.jobs),
            isGetByFieldAtHomeLoading: false,
            isGetByFieldAtHomeSuccess: true,
            getByFieldAtHomeError: "",
        }
    }),
    on(JobActions.getByFieldAtHomeFailure,(state,action)=>{
        return{
            ...state,
            isGetByFieldAtHomeLoading: false,
            isGetByFieldAtHomeSuccess: false,
            getByFieldAtHomeError: action.error,
        }
    }),
    on(JobActions.getByCareerAtHome,(state,action)=>{
        return{
            ...state,
            isGetByCareerAtHomeLoading: true,
            isGetByCareerAtHomeSuccess: false,
            getByCareerAtHomeError: "",
        }
    }),
    on(JobActions.getByCareerAtHomeSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByCareerAtHome: state.jobTakenByCareerAtHome.concat(action.jobs),
            isGetByCareerAtHomeLoading: false,
            isGetByCareerAtHomeSuccess: true,
            getByCareerAtHomeError: "",
        }
    }),
    on(JobActions.getByCareerAtHomeFailure,(state,action)=>{
        return{
            ...state,
            isGetByCareerAtHomeLoading: false,
            isGetByCareerAtHomeSuccess: false,
            getByCareerAtHomeError: action.error,
        }
    }),
)