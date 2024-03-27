import { createReducer, on } from "@ngrx/store";
import { CompanyState } from "../states/company.state";
import * as CompanyActions from "../actions/company.actions";

export const initualState: CompanyState = {
    isGetAllAndSortAtHomeLoading: false,
    isGetAllAndSortAtHomeSuccess: false,
    getAllAndSortAtHomeError: '',
    companysTakenByGetAllAndSortAtHome: []
};

export const companyReducer = createReducer(
    initualState,
    on(CompanyActions.getAllAndSortAtHome,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtHomeLoading: true,
            isGetAllAndSortAtHomeSuccess: false,
            getAllAndSortAtHomeError: ''
        }
    }),
    on(CompanyActions.getAllAndSortAtHomeSuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtHomeLoading: false,
            isGetAllAndSortAtHomeSuccess: true,
            companysTakenByGetAllAndSortAtHome: action.companys
        }
    }),
    on(CompanyActions.getAllAndSortAtHomeFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtHomeLoading: false,
            isGetAllAndSortAtHomeSuccess: false,
            getAllAndSortAtHomeError: action.error
        }
    })
)