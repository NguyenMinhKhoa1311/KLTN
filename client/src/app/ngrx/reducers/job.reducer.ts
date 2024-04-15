import { createReducer, on } from "@ngrx/store";
import { jobState } from "../states/job.state";
import * as JobActions from "../actions/job.actions"
import { Job } from "../../models/job.model";

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


    isCreateJobAtCreateJobLoading: false,
    isCreateJobAtCreateJobSuccess: false,
    createJobAtCreateJobError: "",

    isUpdateJobAtJobDetailSuccess: false,
    isUpdateJobAtJobDetailLoading: false,
    updateJobAtUJobDetailError: "",
    jobUpdatedAtJobDetail: <Job>{},

    isGetByRecruiterAtJobDetailSuccess: false,
    isGetByRecruiterAtJobDetailLoading: false,
    getByRecruiterAtJobDetailError: "",
    jobsTakenByRecruiterAtJobDetail: [],

    isGetByLocationAtJobLoading: false,
    isGetByLocationAtJobSuccess: false,
    getByLocationAtJobError: "",
    jobsTakenByLocationAtJob: [],

    isGetByIdAtJobDetailOfCandidateLoading: false,
    isGetByIdAtJobDetailOfCandidateSuccess: false,
    getByIdAtJobDetailOfCandidateError: "",
    jobTakenByIdAtJobDetailOfCandidate: <Job>{},

    isGetByCompanyAtCompanyDetailLoading: false,
    isGetByCompanyAtCompanyDetailSuccess: false,
    getByCompanyAtCompanyDetailError: "",
    jobsTakenByCompanyAtCompanyDetail: [],

    isGetByFieldAtJobLoading: false,
    isGetByFieldAtJobSuccess: false,
    getByFieldAtJobError: "",
    jobsTakenByFieldAtJob: [],


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







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.clearStateAtHome,(state,action)=>{
        return initialState;
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            JobTakenBygetAllAndSortAtJob: action.jobs,
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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.createJobAtJob,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: true,
            isCreateJobAtCreateJobSuccess: false,
            createJobAtCreateJobError: "",
        }
    }),
    on(JobActions.createJobAtJobSuccess,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: false,
            isCreateJobAtCreateJobSuccess: true,
            createJobAtCreateJobError: "",
        }
    }),
    on(JobActions.createJobAtJobFailure,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: false,
            isCreateJobAtCreateJobSuccess: false,
            createJobAtCreateJobError: action.error,
        }
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.updateJobAtJobDetail,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: true,
            isUpdateJobAtJobDetailSuccess: false,
            updateJobAtUJobDetailError: "",
        }
    }),
    on(JobActions.updateJobAtJobDetailSuccess,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: false,
            isUpdateJobAtJobDetailSuccess: true,
            updateJobAtUJobDetailError: "",
            jobUpdatedAtJobDetail: action.job
        }
    }),
    on(JobActions.updateJobAtJobDetailFailure,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: false,
            isUpdateJobAtJobDetailSuccess: false,
            updateJobAtUJobDetailError: action.error,
        }
    }),





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getJobByRecruiterAtJobDetail,(state,action)=>{
        console.log(action.type);
        
        return{
            ...state,
            isGetByRecruiterAtJobDetailLoading: true,
            isGetByRecruiterAtJobDetailSuccess: false,
            getByRecruiterAtJobDetailError: "",
        }
    }),
    on(JobActions.getJobByRecruiterAtJobDetailSuccess,(state,action)=>{
        console.log(action.type);
        
        return{
            ...state,
            jobsTakenByRecruiterAtJobDetail: action.jobs,
            isGetByRecruiterAtJobDetailLoading: false,
            isGetByRecruiterAtJobDetailSuccess: true,
            getByRecruiterAtJobDetailError: "",
        }
    }),
    on(JobActions.getJobByRecruiterAtJobDetailFailure,(state,action)=>{
        console.log(action.type);
        
        return{
            ...state,
            isGetByRecruiterAtJobDetailLoading: false,
            isGetByRecruiterAtJobDetailSuccess: false,
            getByRecruiterAtJobDetailError: action.error,
        }
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByLocationdWithKeywordsAtJob,(state,action)=>{
        return{
            ...state,
            isGetByLocationAtJobLoading: true,
            isGetByLocationAtJobSuccess: false,
            getByLocationAtJobError: "",
        }
    }),
    on(JobActions.getByLocationdWithKeywordsAtJobSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByLocationAtJob: action.jobs,
            isGetByLocationAtJobLoading: false,
            isGetByLocationAtJobSuccess: true,
            getByLocationAtJobError: "",
        }
    }),
    on(JobActions.getByLocationdWithKeywordsAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByLocationAtJobLoading: false,
            isGetByLocationAtJobSuccess: false,
            getByLocationAtJobError: action.error,
        }
    }),







    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getJobByIdAtJobDetailOfCandidate,(state,action)=>{
        console.log(action.type);
        return{
            ...state,
            isGetByIdAtJobDetailOfCandidateLoading: true,
            isGetByIdAtJobDetailOfCandidateSuccess: false,
            getByIdAtJobDetailOfCandidateError: "",
        }
    }),
    on(JobActions.getJobByIdAtJobDetailOfCandidateSuccess,(state,action)=>{
        console.log(action.type);
        
        return{
            ...state,
            jobTakenByIdAtJobDetailOfCandidate: action.job,
            isGetByIdAtJobDetailOfCandidateLoading: false,
            isGetByIdAtJobDetailOfCandidateSuccess: true,
            getByIdAtJobDetailOfCandidateError: "",
        }
    }),
    on(JobActions.getJobByIdAtJobDetailOfCandidateFailure,(state,action)=>{
        console.log(action.type);
        
        return{
            ...state,
            isGetByIdAtJobDetailOfCandidateLoading: false,
            isGetByIdAtJobDetailOfCandidateSuccess: false,
            getByIdAtJobDetailOfCandidateError: action.error,
        }
    }),


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByCompanyAtCompanyDetail,(state,action)=>{
        return{
            ...state,
            isGetByCompanyAtCompanyDetailLoading: true,
            isGetByCompanyAtCompanyDetailSuccess: false,
            getByCompanyAtCompanyDetailError: "",
        }
    }),
    on(JobActions.getByCompanyAtCompanyDetailSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByCompanyAtCompanyDetail: action.jobs,
            isGetByCompanyAtCompanyDetailLoading: false,
            isGetByCompanyAtCompanyDetailSuccess: true,
            getByCompanyAtCompanyDetailError: "",
        }
    }),
    on(JobActions.getByCompanyAtCompanyDetailFailure,(state,action)=>{
        return{
            ...state,
            isGetByCompanyAtCompanyDetailLoading: false,
            isGetByCompanyAtCompanyDetailSuccess: false,
            getByCompanyAtCompanyDetailError: action.error,
        }
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByFieldAtJob,(state,action)=>{
        return{
            ...state,
            isGetByFieldAtJobLoading: true,
            isGetByFieldAtJobSuccess: false,
            getByFieldAtJobError: "",
        }
    }),
    on(JobActions.getByFieldAtJobSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByFieldAtJob: action.jobs,
            isGetByFieldAtJobLoading: false,
            isGetByFieldAtJobSuccess: true,
            getByFieldAtJobError: "",
        }
    }),
    on(JobActions.getByFieldAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByFieldAtJobLoading: false,
            isGetByFieldAtJobSuccess: false,
            getByFieldAtJobError: action.error,
        }
    }),

)