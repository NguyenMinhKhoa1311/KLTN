import { createReducer, on } from "@ngrx/store";
import { BillState } from "../states/bill.state";
import * as BillActions from "../actions/bill.actions";

const initizaState: BillState = {
    billsTakenByGetByMonthAtStatistical: [],
    isGetByMonthAtStatisticalLoading: false,
    isGetByMonthAtStatisticalSuccess: false,
    getByMonthAtStatisticalError: "",

    billsTakenByGetByYearAtStatistical: [],
    isGetByYearAtStatisticalLoading: false,
    isGetByYearAtStatisticalSuccess: false,
    getByYearAtStatisticalError: "",

    billsTakenByGetByDateAtStatistical: [],
    isGetByDateAtStatisticalLoading: false,
    isGetByDateAtStatisticalSuccess: false,
    getByDateAtStatisticalError: "",
};

export const billReducer = createReducer(
    initizaState,
    on(BillActions.getByDateAtStatistical, (state, action) => {
        return {
            ...state,
            isGetByDateAtStatisticalLoading: true,
            isGetByDateAtStatisticalSuccess: false,
            getByDateAtStatisticalError: "",
        };
    }),
    on(BillActions.getByDateAtStatisticalSuccess, (state, action) => {
        return {
            ...state,
            isGetByDateAtStatisticalLoading: false,
            isGetByDateAtStatisticalSuccess: true,
            billsTakenByGetByDateAtStatistical: action.bills,
        };
    }), 
    on(BillActions.getByDateAtStatisticalFailure, (state, action) => {
        return {
            ...state,
            isGetByDateAtStatisticalLoading: false,
            isGetByDateAtStatisticalSuccess: false,
            getByDateAtStatisticalError: action.error,
        };
    }),


    //////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BillActions.getByMonthAtStatistical, (state, action) => {
        return {
            ...state,
            isGetByMonthAtStatisticalLoading: true,
            isGetByMonthAtStatisticalSuccess: false,
            getByMonthAtStatisticalError: "",
        };
    }),
    on(BillActions.getByMonthAtStatisticalSuccess, (state, action) => {
        return {
            ...state,
            isGetByMonthAtStatisticalLoading: false,
            isGetByMonthAtStatisticalSuccess: true,
            billsTakenByGetByMonthAtStatistical: action.bills,
        };
    }),
    on(BillActions.getByMonthAtStatisticalFailure, (state, action) => {
        return {
            ...state,
            isGetByMonthAtStatisticalLoading: false,
            isGetByMonthAtStatisticalSuccess: false,
            getByMonthAtStatisticalError: action.error,
        };
    }),


    //////////////////////////////////////////////////////////////////////////////////////////////////////
    on(BillActions.getByYearAtStatistical, (state, action) => {
        return {
            ...state,
            isGetByYearAtStatisticalLoading: true,
            isGetByYearAtStatisticalSuccess: false,
            getByYearAtStatisticalError: "",
        };
    }),
    on(BillActions.getByYearAtStatisticalSuccess, (state, action) => {
        return {
            ...state,
            isGetByYearAtStatisticalLoading: false,
            isGetByYearAtStatisticalSuccess: true,
            billsTakenByGetByYearAtStatistical: action.bills,
        };
    }),
    on(BillActions.getByYearAtStatisticalFailure, (state, action) => {
        return {
            ...state,
            isGetByYearAtStatisticalLoading: false,
            isGetByYearAtStatisticalSuccess: false,
            getByYearAtStatisticalError: action.error,
        };
    }),
);
