import { RecruitmentState } from "../states/recruitment.state";
import * as RecruitmentActions from "../actions/recruitment.actions";
import { createReducer, on } from "@ngrx/store";


export const  initialState: RecruitmentState = {
    isGetByRecruiterLoading: false,
    isGetByRecruiterSuccess: false,
    getByRecruiterError: '',
    recruitmentsTakenByRecruiter: [],

    isUpdateStatusSeenLoading: false,
    isUpdateStatusSeenSuccess: false,
    updateStatusSeenError: '',

    isUpdateStatusLoading: false,
    isUpdateStatusSuccess: false,
    updateStatusError: ''
}

export const recruitmentReducer = createReducer(
    initialState,
    on(RecruitmentActions.getByRecruiterAtAplicationList, (state,action) => ({
        ...state,
        isGetByRecruiterLoading: true,
        isGetByRecruiterSuccess: false,
        getByRecruiterError: ''
    })),
    on(RecruitmentActions.getByRecruiterAtAplicationListSuccess, (state,action) => ({
        ...state,
        isGetByRecruiterLoading: false,
        isGetByRecruiterSuccess: true,
        getByRecruiterError: '',
        recruitmentsTakenByRecruiter: action.recruitments
    })),
    on(RecruitmentActions.getByRecruiterAtAplicationListFailure, (state,action) => ({
        ...state,
        isGetByRecruiterLoading: false,
        isGetByRecruiterSuccess: false,
        getByRecruiterError: action.error
    })),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruitmentActions.updateStatusSeenAtAplicationList, (state,action) => ({
        ...state,
        isUpdateStatusSeenLoading: true,
        isUpdateStatusSeenSuccess: false,
        updateStatusSeenError: ''
    })),
    on(RecruitmentActions.updateStatusSeenAtAplicationListSuccess, (state) => ({
        ...state,
        isUpdateStatusSeenLoading: false,
        isUpdateStatusSeenSuccess: true,
        updateStatusSeenError: ''
    })),
    on(RecruitmentActions.updateStatusSeenAtAplicationListFailure, (state,action) => ({
        ...state,
        isUpdateStatusSeenLoading: false,
        isUpdateStatusSeenSuccess: false,
        updateStatusSeenError: action.error
    })),



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruitmentActions.updateStatusAtAplicationList, (state,action) => ({
        ...state,
        isUpdateStatusLoading: true,
        isUpdateStatusSuccess: false,
        updateStatusError: ''
    })),
    on(RecruitmentActions.updateStatusAtAplicationListSuccess, (state) => ({
        ...state,
        isUpdateStatusLoading: false,
        isUpdateStatusSuccess: true,
        updateStatusError: ''
    })),
    on(RecruitmentActions.updateStatusAtAplicationListFailure, (state,action) => ({
        ...state,
        isUpdateStatusLoading: false,
        isUpdateStatusSuccess: false,
        updateStatusError: action.error
    })),

)