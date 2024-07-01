import { createReducer, on } from "@ngrx/store";
import { BanState } from "../states/ban.state";

import * as BanActions from "../actions/ban.actions";
import { Ban } from "../../models/ban.model";

const initizaState: BanState = {
    isBanUserAtManageCandidateLoading: false,
    isBanUserAtManageCandidateSuccess: false,
    banUserAtManageCandidateError: "",

    isUnBanUserAtManageCandidateLoading: false,
    isUnBanUserAtManageCandidateSuccess: false,
    unBanUserAtManageCandidateError: "",

    isBanUserAtManageRecruiterLoading: false,
    isBanUserAtManageRecruiterSuccess: false,
    banUserAtManageRecruiterError: "",

    unBanUserAtManageRecruiterLoading: false,
    unBanUserAtManageRecruiterSuccess: false,
    unBanUserAtManageRecruiterError: "",

    isGetBanByCandidateAtManageCandidateLoading: false,
    isGetBanByCandidateAtManageCandidateSuccess: false,
    getBanByCandidateAtManageCandidateError: "",
    banTakenByCandidateAtManagementCandidate: <Ban>{},

    banTakenByRecruiterAtManageRecruiter: <Ban>{},
    isGetBanByRecruiterAtManageRecruiterLoading: false,
    isGetBanByRecruiterAtManageRecruiterSuccess: false,
    getBanByRecruiterAtManageRecruiterError: "",
};

export const banReducer = createReducer(
    initizaState,
    on(BanActions.banUserAtManageCandidate, (state, action) => {
        return {
            ...state,
            isBanUserAtManageCandidateLoading: true,
            isBanUserAtManageCandidateSuccess: false,
            banUserAtManageCandidateError: "",
        };
    }),
    on(BanActions.banUserAtManageCandidateSuccess, (state, action) => {
        return {
            ...state,
            isBanUserAtManageCandidateLoading: false,
            isBanUserAtManageCandidateSuccess: true,
        };
    }),
    on(BanActions.banUserAtManageCandidateFailure, (state, action) => {
        return {
            ...state,
            isBanUserAtManageCandidateLoading: false,
            isBanUserAtManageCandidateSuccess: false,
            banUserAtManageCandidateError: action.error,
        };
    }),

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BanActions.unBanUserAtManageCandidate, (state, action) => {
        return {
            ...state,
            isUnBanUserAtManageCandidateLoading: true,
            isUnBanUserAtManageCandidateSuccess: false,
            unBanUserAtManageCandidateError: "",
        };
    }),
    on(BanActions.unBanUserAtManageCandidateSuccess, (state, action) => {
        return {
            ...state,
            isUnBanUserAtManageCandidateLoading: false,
            isUnBanUserAtManageCandidateSuccess: true,
        };
    }),
    on(BanActions.unBanUserAtManageCandidateFailure, (state, action) => {
        return {
            ...state,
            isUnBanUserAtManageCandidateLoading: false,
            isUnBanAtManageCandidateSuccess: false,
            unBanUserAtManageCandidateError: action.error,
        };
    }),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BanActions.banUserAtManageRecruiter, (state, action) => {
        return {
            ...state,
            isBanUserAtManageRecruiterLoading: true,
            isBanUserAtManageRecruiterSuccess: false,
            banUserAtManageRecruiterError: "",
        };
    }),
    on(BanActions.banUserAtManageRecruiterSuccess, (state, action) => {
        return {
            ...state,
            isBanUserAtManageRecruiterLoading: false,
            isBanUserAtManageRecruiterSuccess: true,
        };
    }),
    on(BanActions.banUserAtManageRecruiterFailure, (state, action) => {
        return {
            ...state,
            isBanUserAtManageRecruiterLoading: false,
            isBanUserAtManageRecruiterSuccess: false,
            banUserAtManageRecruiterError: action.error,
        };
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BanActions.unBanUserAtManageRecruiter, (state, action) => {
        return {
            ...state,
            unBanUserAtManageRecruiterLoading: true,
            unBanUserAtManageRecruiterSuccess: false,
            unBanUserAtManageRecruiterError: "",
        };
    }),
    on(BanActions.unBanUserAtManageRecruiterSuccess, (state, action) => {
        return {
            ...state,
            unBanUserAtManageRecruiterLoading: false,
            unBanUserAtManageRecruiterSuccess: true,
        };
    }),
    on(BanActions.unBanUserAtManageRecruiterFailure, (state, action) => {
        return {
            ...state,
            unBanUserAtManageRecruiterLoading: false,
            unBanUserAtManageRecruiterSuccess: false,
            unBanUserAtManageRecruiterError: action.error,
        };
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BanActions.getByCandidateAtManageCandidate, (state, action) => {
        return {
            ...state,
            isGetBanByCandidateAtManageCandidateLoading: true,
            isGetBanByCandidateAtManageCandidateSuccess: false,
            getBanByCandidateAtManageCandidateError: "",
        };
    }),
    on(BanActions.getByCandidateAtManageCandidateSuccess, (state, action) => {
        return {
            ...state,
            isGetBanByCandidateAtManageCandidateLoading: false,
            isGetBanByCandidateAtManageCandidateSuccess: true,
            banTakenByCandidateAtManagementCandidate: action.ban,
        };
    }),
    on(BanActions.getByCandidateAtManageCandidateFailure, (state, action) => {
        return {
            ...state,
            isGetBanByCandidateAtManageCandidateLoading: false,
            isGetBanByCandidateAtManageCandidateSuccess: false,
            getBanByCandidateAtManageCandidateError: action.error,
        };
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BanActions.getByRecruiterAtManageRecruiter, (state, action) => {
        return {
            ...state,
            isGetBanByRecruiterAtManageRecruiterLoading: true,
            isGetBanByRecruiterAtManageRecruiterSuccess: false,
            getBanByRecruiterAtManageRecruiterError: "",
        };
    }),
    on(BanActions.getByRecruiterAtManageRecruiterSuccess, (state, action) => {
        return {
            ...state,
            isGetBanByRecruiterAtManageRecruiterLoading: false,
            isGetBanByRecruiterAtManageRecruiterSuccess: true,
            banTakenByRecruiterAtManageRecruiter: action.ban,
        };
    }),
    on(BanActions.getByRecruiterAtManageRecruiterFailure, (state, action) => {
        return {
            ...state,
            isGetBanByRecruiterAtManageRecruiterLoading: false,
            isGetBanByRecruiterAtManageRecruiterSuccess: false,
            getBanByRecruiterAtManageRecruiterError: action.error,
        };
    }),
    


)