import { createReducer, on } from "@ngrx/store";
import { CompanyState } from "../states/company.state";
import * as CompanyActions from "../actions/company.actions";

export const initualState: CompanyState = {
    isGetAllAtCompanyLoading: false,
    isGetAllAtCompanySuccess: false,
    getAllAtCompanyError: '',
    companysTakenByGetAllAtCompany: []
};

export const companyReducer = createReducer(
    initualState,
    on(CompanyActions.getAllAtCompany,(state,action)=>{
        return {
            ...state,
            isGetAllAtCompanyLoading: true,
            isGetAllAtCompanySuccess: false,
            getAllAtCompanyError: ''
        }
    }),
    on(CompanyActions.getAllAtCompanySuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAtCompanyLoading: false,
            isGetAllAtCompanySuccess: true,
            companysTakenByGetAllAtCompany: action.companys
        }
    }),
    on(CompanyActions.getAllAtCompanyFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtCompanyLoading: false,
            isGetAllAtCompanySuccess: false,
            getAllAtCompanyError: action.error
        }
    })
)