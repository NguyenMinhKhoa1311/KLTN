import { createReducer, on } from "@ngrx/store";
import { CronJob } from "../../models/cron-job.model";
import { CronJobState } from "../states/cron-job.state";
import * as CronJobActions from "../actions/cron-job.actions"; 

export const initialState:CronJobState = {
    isGetCronJobAtChangeFormatLoading: false,
    isGetCronJobAtChangeFormatSuccess: false,
    getCronJobAtChangeFormatError: '',
    cronJobAtChangeFormat: <CronJob>{},
    isUpdateCronJobAtChangeFormatLoading: false,
    isUpdateCronJobAtChangeFormatSuccess: false,
    updateCronJobAtChangeFormatError: ''
}

export const cronJobReducer = createReducer(
    initialState,
    on(
        CronJobActions.getCronJobAtChangeFormat, (state) => {
            return{
            ...state,
            isGetCronJobAtChangeFormatLoading: true,
            isGetCronJobAtChangeFormatSuccess: false,
            getCronJobAtChangeFormatError: ''
        }
        }
    ),
    on(
        CronJobActions.getCronJobAtChangeFormatSuccess, (state, action) => {
            console.log(action.cronJob);
            
            return{
            ...state,
            isGetCronJobAtChangeFormatLoading: false,
            isGetCronJobAtChangeFormatSuccess: true,
            getCronJobAtChangeFormatError: '',
            cronJobAtChangeFormat: action.cronJob
        }
        }
    ),
    on(
        CronJobActions.getCronJobAtChangeFormatFailure, (state, action) => {
            console.log(action.error);
            
            return{
            ...state,
            isGetCronJobAtChangeFormatLoading: false,
            isGetCronJobAtChangeFormatSuccess: false,
            getCronJobAtChangeFormatError: action.error
        }
        }
    ),


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(
        CronJobActions.updateCronJobAtChangeFormat, (state) => ({
            ...state,
            isUpdateCronJobAtChangeFormatLoading: true,
            isUpdateCronJobAtChangeFormatSuccess: false,
            updateCronJobAtChangeFormatError: ''
        })
    ),
    on(
        CronJobActions.updateCronJobAtChangeFormatSuccess, (state) => ({
            ...state,
            isUpdateCronJobAtChangeFormatLoading: false,
            isUpdateCronJobAtChangeFormatSuccess: true,
            updateCronJobAtChangeFormatError: ''
        })
    ),
    on(
        CronJobActions.updateCronJobAtChangeFormatFailure, (state, action) => ({
            ...state,
            isUpdateCronJobAtChangeFormatLoading: false,
            isUpdateCronJobAtChangeFormatSuccess: false,
            updateCronJobAtChangeFormatError: action.error
        })
    ))