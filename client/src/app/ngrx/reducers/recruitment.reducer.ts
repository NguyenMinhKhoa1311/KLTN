import { RecruitmentState } from "../states/recruitment.state";
import * as RecruitmentActions from "../actions/recruitment.actions";
import { createReducer, on } from "@ngrx/store";


export const  initialState: RecruitmentState = {
    isGetByRecruiterLoading: false,
    isGetByRecruiterSuccess: false,
    getByRecruiterError: '',
    recruitmentsTakenByRecruiter: []
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
    }))
)