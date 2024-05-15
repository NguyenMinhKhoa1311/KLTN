import { createAction, props } from "@ngrx/store";
import { Company } from "../../models/company.model";

export const getAllAndSortAtHome = createAction(
    '[Company] Get All And Sort At Home',
    props<{ page: number, limit: number, sortBy: string, sortOrder: string }>()
    );

export const getAllAndSortAtHomeSuccess = createAction(
    '[Company] Get AllAnd Sort At Home Success',
    props<{ companys: Company[] }>()
    );
export const getAllAndSortAtHomeFailure = createAction(
    '[Company] Get All And Sort At Home Failure',
    props<{ error: string }>()
    );







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getBy_IdAtCmopanyDetail = createAction(
    '[Company] Get By Id At Company Detail',
    props<{ id: string }>()
    );
export const getBy_IdAtCmopanyDetailSuccess = createAction(
    '[Company] Get By Id At Company Detail Success',
    props<{ company: Company }>()
    );
export const getBy_IdAtCmopanyDetailFailure = createAction(
    '[Company] Get By Id At Company Detail Failure',
    props<{ error: string }>()
    );





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAndSortAtCompany = createAction(
    '[Company] Get All And Sort At Company',
    props<{ page: number, limit: number, sortBy: string, sortOrder: string }>()
    );
export const getAllAndSortAtCompanySuccess = createAction(
    '[Company] Get AllAnd Sort At Company Success',
    props<{ companys: Company[] }>()
    );
export const getAllAndSortAtCompanyFailure = createAction(
    '[Company] Get All And Sort At Company Failure',
    props<{ error: string }>()
    );


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByNameWithKeywordAtCompany = createAction(
    '[Company] Get By Name With Keyword At Company',
    props<{ keyword: string, page: number, limit: number, sortBy: string, sortOrder: string }>()
    );
export const getByNameWithKeywordAtCompanySuccess = createAction(
    '[Company] Get By Name With Keyword At Company Success',
    props<{ companys: Company[] }>()
    );
export const getByNameWithKeywordAtCompanyFailure = createAction(
    '[Company] Get By Name With Keyword At Company Failure',
    props<{ error: string }>()
    );
    