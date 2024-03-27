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

    jobTakenByHotJobAtHome: [],
    isGetByHotJobAtHomeLoading: false,
    isGetByHotJobAtHomeSuccess: false,
    getByHotJobAtHomeError: "",

    JobTakenBygetAllAndSortAtJob: [],
    isGetAllAndSortAtJobLoading: false,
    isGetAllAndSortAtJobSuccess: false,
    getAllAndSortAtJobError: "",

    JobTakenByFieldNameAtJob: [],
    isGetByFieldNameAtJobLoading: false,
    isGetByFieldNameAtJobSuccess: false,
    getByFieldNameAtJobError: "",

    JobTakenByCareerNameAtJob: [],
    isGetByCareerNameAtJobLoading: false,
    isGetByCareerNameAtJobSuccess: false,
    getByCareerNameAtJobError: "",
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
            jobTakenByFieldAtHome: action.jobs,
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
            jobTakenByCareerAtHome: action.jobs,
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



    on(JobActions.getByHotJobAtHome,(state,action)=>{
        return{
            ...state,
            isGetByHotJobAtHomeLoading: true,
            isGetByHotJobAtHomeSuccess: false,
            getByHotJobAtHomeError: "",
        }
    }),
    on(JobActions.getByHotJobAtHomeSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByHotJobAtHome: action.jobs,
            isGetByHotJobAtHomeLoading: false,
            isGetByHotJobAtHomeSuccess: true,
            getByHotJobAtHomeError: "",
        }
    }),
    on(JobActions.getByHotJobAtHomeFailure,(state,action)=>{
        return{
            ...state,
            isGetByHotJobAtHomeLoading: false,
            isGetByHotJobAtHomeSuccess: false,
            getByHotJobAtHomeError: action.error,
        }
    }),
    on(JobActions.clearStateAtHome,(state,action)=>{
        return{
            ...state,
            jobTakenByFieldAtHome: [],
            isGetByFieldAtHomeLoading: false,
            isGetByFieldAtHomeSuccess: false,
            getByFieldAtHomeError: "",

            jobTakenByCareerAtHome: [],
            isGetByCareerAtHomeLoading: false,
            isGetByCareerAtHomeSuccess: false,
            getByCareerAtHomeError: "",

            jobTakenByHotJobAtHome: [],
            isGetByHotJobAtHomeLoading: false,
            isGetByHotJobAtHomeSuccess: false,
            getByHotJobAtHomeError: "",
        }
    }),
    on(JobActions.getAllAndSortAtJob,(state,action)=>{
        return{
            ...state,
            isGetAllAndSortAtJobLoading: true,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: "",
        }
    }),
    on(JobActions.getAllAndSortAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenBygetAllAndSortAtJob: state.JobTakenBygetAllAndSortAtJob.concat(action.jobs),
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: true,
            getAllAndSortAtJobError: "",
        }
    }),
    on(JobActions.getAllAndSortAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: action.error,
        }
    }),

    on(JobActions.getByFieldNameAtJob,(state,action)=>{
        return{
            ...state,
            isGetByFieldNameAtJobLoading: true,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: "",
        }
    }),
    on(JobActions.getByFieldNameAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenByFieldNameAtJob: action.jobs,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: true,
            getByFieldNameAtJobError: "",
        }
    }),
    on(JobActions.getByFieldNameAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: action.error,
        }
    }),
    on(JobActions.getByCareerNameAtJob,(state,action)=>{
        return{
            ...state,
            isGetByCareerNameAtJobLoading: true,
            isGetByCareerNameAtJobSuccess: false,
            getByCareerNameAtJobError: "",
        }
    }),
    on(JobActions.getByCareerNameAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenByCareerNameAtJob: action.jobs,
            isGetByCareerNameAtJobLoading: false,
            isGetByCareerNameAtJobSuccess: true,
            getByCareerNameAtJobError: "",
        }
    }),
    on(JobActions.getByCareerNameAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByCareerNameAtJobLoading: false,
            isGetByCareerNameAtJobSuccess: false,
            getByCareerNameAtJobError: action.error,
        }
    }),
)