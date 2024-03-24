import { createAction, props } from "@ngrx/store";
import { Company } from "../../models/company.model";

export const getAllAtCompany = createAction(
    '[Company] Get All At Company',
    props<{ page: number, limit: number }>()
    );

export const getAllAtCompanySuccess = createAction(
    '[Company] Get All At Company Success',
     props<{ companys: Company[] }>()
     );
export const getAllAtCompanyFailure = createAction(
    '[Company] Get All At Company Failure',
    props<{ error: string }>()
    );