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