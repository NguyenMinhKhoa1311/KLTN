import { createReducer, on } from "@ngrx/store";
import { BanState } from "../states/ban.state";

import * as BanActions from "../actions/ban.actions";

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
)