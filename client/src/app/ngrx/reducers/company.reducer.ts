import { createReducer, on } from "@ngrx/store";
import { CompanyState } from "../states/company.state";
import * as CompanyActions from "../actions/company.actions";
import { Company } from "../../models/company.model";

export const initualState: CompanyState = {
    isGetAllAndSortAtHomeLoading: false,
    isGetAllAndSortAtHomeSuccess: false,
    getAllAndSortAtHomeError: '',
    companysTakenByGetAllAndSortAtHome: [],


    isGetByIdAtCompanyDetailLoading: false,
    isGetByIdAtCompanyDetailSuccess: false,
    getByIdAtCompanyDetailError: '',
    companyTakenByGetByIdAtCompanyDetail: <Company>{},

    isGetAllAndSortAtCompanyLoading: false,
    isGetAllAndSortAtCompanySuccess: false,
    getAllAndSortAtCompanyError: '',
    companysTakenByGetAllAndSortAtCompany: []

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
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CompanyActions.getBy_IdAtCmopanyDetail,(state,action)=>{
        return {
            ...state,
            isGetByIdAtCompanyDetailLoading: true,
            isGetByIdAtCompanyDetailSuccess: false,
            getByIdAtCompanyDetailError: ''
        }
    }),
    on(CompanyActions.getBy_IdAtCmopanyDetailSuccess,(state,action)=>{
        return {
            ...state,
            isGetByIdAtCompanyDetailLoading: false,
            isGetByIdAtCompanyDetailSuccess: true,
            companyTakenByGetByIdAtCompanyDetail: action.company
        }
    }),
    on(CompanyActions.getBy_IdAtCmopanyDetailFailure,(state,action)=>{
        return {
            ...state,
            isGetByIdAtCompanyDetailLoading: false,
            isGetByIdAtCompanyDetailSuccess: false,
            getByIdAtCompanyDetailError: action.error
        }
    }),





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CompanyActions.getAllAndSortAtCompany,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtCompanyLoading: true,
            isGetAllAndSortAtCompanySuccess: false,
            getAllAndSortAtCompanyError: ''
        }
    }),
    on(CompanyActions.getAllAndSortAtCompanySuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtCompanyLoading: false,
            isGetAllAndSortAtCompanySuccess: true,
            companysTakenByGetAllAndSortAtCompany: action.companys
        }
    }),
    on(CompanyActions.getAllAndSortAtCompanyFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtCompanyLoading: false,
            isGetAllAndSortAtCompanySuccess: false,
            getAllAndSortAtCompanyError: action.error
        }
    })
    
)