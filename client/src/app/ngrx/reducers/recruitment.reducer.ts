import { RecruitmentState } from "../states/recruitment.state";
import * as RecruitmentActions from "../actions/recruitment.actions";
import { createReducer, on } from "@ngrx/store";
import { Recruitment } from "../../models/recruitment.model";


export const  initialState: RecruitmentState = {
    isGetByRecruiterLoading: false,
    isGetByRecruiterSuccess: false,
    getByRecruiterError: '',
    recruitmentsTakenByRecruiter: [],

    isUpdateStatusSeenLoading: false,
    isUpdateStatusSeenSuccess: false,
    updateStatusSeenError: '',
    recruitmentUpdatedStatusSeen:<Recruitment>{} ,

    isUpdateStatusLoading: false,
    isUpdateStatusSuccess: false,
    updateStatusError: '',
    recruitmentUpdatedStatus:<Recruitment>{} ,

    isGetByCandidateLoading: false,
    isGetByCandidateSuccess: false,
    getByCandidateError: '',
    recruitmentsTakenByCandidate: [],

    isUpdateDateInterviewLoading: false,
    isUpdateDateInterviewSuccess: false,
    updateDateInterviewError: '',
    recruitmentUpdatedDateInterview:<Recruitment>{} ,

    isUpdateStatusCancelAtApplyJobLoading: false,
    isUpdateStatusCancelAtApplyJobSuccess: false,
    updateStatusCancelAtApplyJobError: '',

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
    on(RecruitmentActions.updateStatusSeenAtAplicationListSuccess, (state,action) => ({
        ...state,
        isUpdateStatusSeenLoading: false,
        isUpdateStatusSeenSuccess: true,
        updateStatusSeenError: '',
        recruitmentUpdatedStatusSeen: action.recruitment
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
    on(RecruitmentActions.updateStatusAtAplicationListSuccess, (state, action) => ({
        ...state,
        isUpdateStatusLoading: false,
        isUpdateStatusSuccess: true,
        updateStatusError: '',
        recruitmentUpdatedStatus: action.recruitment
    })),
    on(RecruitmentActions.updateStatusAtAplicationListFailure, (state,action) => ({
        ...state,
        isUpdateStatusLoading: false,
        isUpdateStatusSuccess: false,
        updateStatusError: action.error
    })),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate, (state,action) => ({
        ...state,
        isGetByCandidateLoading: true,
        isGetByCandidateSuccess: false,
        getByCandidateError: ''
    })),
    on(RecruitmentActions.getByCandidasteAtAplicationListOfCandidateSuccess, (state,action) => ({
        ...state,
        isGetByCandidateLoading: false,
        isGetByCandidateSuccess: true,
        getByCandidateError: '',
        recruitmentsTakenByCandidate: action.recruitments
    })),
    on(RecruitmentActions.getByCandidasteAtAplicationListOfCandidateFailure, (state,action) => ({
        ...state,
        isGetByCandidateLoading: false,
        isGetByCandidateSuccess: false,
        getByCandidateError: action.error
    })),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruitmentActions.updateDateInterviewAtAplicationList, (state,action) => ({
        ...state,
        isUpdateDateInterviewLoading: true,
        isUpdateDateInterviewSuccess: false,
        updateDateInterviewError: ''
    })),
    on(RecruitmentActions.updateDateInterviewAtAplicationListSuccess, (state,action) => ({
        ...state,
        isUpdateDateInterviewLoading: false,
        isUpdateDateInterviewSuccess: true,
        updateDateInterviewError: '',
        recruitmentUpdatedDateInterview: action.recruitment
    })),
    on(RecruitmentActions.updateDateInterviewAtAplicationListFailure, (state,action) => ({
        ...state,
        isUpdateDateInterviewLoading: false,
        isUpdateDateInterviewSuccess: false,
        updateDateInterviewError: action.error
    })),



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(RecruitmentActions.updateStatusCancelAtApplyJob, (state,action) => ({
        ...state,
        isUpdateStatusCancelAtApplyJobLoading: true,
        isUpdateStatusCancelAtApplyJobSuccess: false,
        updateStatusCancelAtApplyJobError: ''
    })),
    on(RecruitmentActions.updateStatusCancelAtApplyJobSuccess, (state,action) => ({
        ...state,
        isUpdateStatusCancelAtApplyJobLoading: false,
        isUpdateStatusCancelAtApplyJobSuccess: true,
        updateStatusCancelAtApplyJobError: ''
    })),
    on(RecruitmentActions.updateStatusCancelAtApplyJobFailure, (state,action) => ({
        ...state,
        isUpdateStatusCancelAtApplyJobLoading: false,
        isUpdateStatusCancelAtApplyJobSuccess: false,
        updateStatusCancelAtApplyJobError: action.error
    })),

)