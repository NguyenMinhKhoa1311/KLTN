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
    companysTakenByGetAllAndSortAtCompany: [],

    isGetByNameWithKeywordAtCompanyLoading: false,
    isGetByNameWithKeywordAtCompanySuccess: false,
    getByNameWithKeywordAtCompanyError: '',
    companysTakenByGetByNameWithKeywordAtCompany: [],

    isUpdateAtProfileLoading: false,
    isUpdateAtProfileSuccess: false,
    updateAtProfileError: '',
    companyUpdatedByUpdateAtProfile: <Company>{},

    isGetAllAndSortAtJobLoading: false,
    isGetAllAndSortAtJobSuccess: false,
    getAllAndSortAtJobError: '',
    companysTakenByGetAllAndSortAtJob: []




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
        console.log("companys", action.companys);
        
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
    }),

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CompanyActions.getByNameWithKeywordAtCompany,(state,action)=>{
        return {
            ...state,
            isGetByNameWithKeywordAtCompanyLoading: true,
            isGetByNameWithKeywordAtCompanySuccess: false,
            getByNameWithKeywordAtCompanyError: ''
        }
    }),
    on(CompanyActions.getByNameWithKeywordAtCompanySuccess,(state,action)=>{
        return {
            ...state,
            isGetByNameWithKeywordAtCompanyLoading: false,
            isGetByNameWithKeywordAtCompanySuccess: true,
            companysTakenByGetByNameWithKeywordAtCompany: action.companys
        }
    }),
    on(CompanyActions.getByNameWithKeywordAtCompanyFailure,(state,action)=>{
        return {
            ...state,
            isGetByNameWithKeywordAtCompanyLoading: false,
            isGetByNameWithKeywordAtCompanySuccess: false,
            getByNameWithKeywordAtCompanyError: action.error
        }
    }),

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on (CompanyActions.resetState, (state, action) => {
        return {
            ...initualState
        }
    }),

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CompanyActions.updateAtProfile,(state,action)=>{
        return {
            ...state,
            isUpdateAtProfileLoading: true,
            isUpdateAtProfileSuccess: false,
            updateAtProfileError: ''
        }
    }),
    on(CompanyActions.updateAtProfileSuccess,(state,action)=>{
        return {
            ...state,
            isUpdateAtProfileLoading: false,
            isUpdateAtProfileSuccess: true,
            companyUpdatedByUpdateAtProfile: action.company
        }
    }),
    on(CompanyActions.updateAtProfileFailure,(state,action)=>{
        return {
            ...state,
            isUpdateAtProfileLoading: false,
            isUpdateAtProfileSuccess: false,
            updateAtProfileError: action.error
        }
    }),

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CompanyActions.getAllAndSortAtJob,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtJobLoading: true,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: ''
        }
    }),
    on(CompanyActions.getAllAndSortAtJobSuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: true,
            companysTakenByGetAllAndSortAtJob: action.companys
        }
    }),
    on(CompanyActions.getAllAndSortAtJobFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: action.error
        }
    }),
    
    
)