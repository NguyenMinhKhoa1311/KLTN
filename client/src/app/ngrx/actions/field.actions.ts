import { createAction, props } from "@ngrx/store";
import { Field } from "../../models/field.model";

export const getFieldAtHome = createAction(
    '[Field] Get Field At Home',
    props<{page: number, limit: number}>()
    );
export const getFieldAtHomeSuccess = createAction(
    '[Field] Get Field At Home Success',
    props<{fields: Field[]}>()
    );

export const getFieldAtHomeFailure = createAction(
    '[Field] Get Field At Home Failure',
    props<{err: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimit = createAction(
    '[Field] Get All No Limit'
    );
export const getAllNoLimitSuccess = createAction(
    '[Field] Get All No Limit Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitFailure = createAction(
    '[Field] Get All No Limit Failure',
    props<{err: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtCreaetProfile = createAction(
    '[Field] Get All No Limit At Create Profile'
    );
export const getAllNoLimitAtCreaetProfileSuccess = createAction(
    '[Field] Get All No Limit At Create Profile Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtCreaetProfileFailure = createAction(
    '[Field] Get All No Limit At Create Profile Failure',
    props<{err: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtCreateJob = createAction(
    '[Field] Get All No Limit At Create Job'
    );
export const getAllNoLimitAtCreateJobSuccess = createAction(
    '[Field] Get All No Limit At Create Job Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtCreateJobFailure = createAction(
    '[Field] Get All No Limit At Create Job Failure',
    props<{err: string}>()
    );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtProfile = createAction(
    '[Field] Get All No Limit At Profile'
    );
export const getAllNoLimitAtProfileSuccess = createAction(
    '[Field] Get All No Limit At Profile Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtProfileFailure = createAction(
    '[Field] Get All No Limit At Profile Failure',
    props<{err: string}>()
    );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtJobDetail = createAction(
    '[Field] Get All No Limit At Job Detail'
    );
export const getAllNoLimitAtJobDetailSuccess = createAction(
    '[Field] Get All No Limit At Job Detail Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtJobDetailFailure = createAction(
    '[Field] Get All No Limit At Job Detail Failure',
    props<{err: string}>()
    );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtStatistical = createAction(
    '[Field] Get All No Limit At Statistical'
    );
export const getAllNoLimitAtStatisticalSuccess = createAction(
    '[Field] Get All No Limit At Statistical Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtStatisticalFailure = createAction(
    '[Field] Get All No Limit At Statistical Failure',
    props<{err: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllNoLimitAtCreateCompany = createAction(
    '[Field] Get All No Limit At Create Company'
    );
export const getAllNoLimitAtCreateCompanySuccess = createAction(
    '[Field] Get All No Limit At Create Company Success',
    props<{fields: Field[]}>()
    );
export const getAllNoLimitAtCreateCompanyFailure = createAction(
    '[Field] Get All No Limit At Create Company Failure',
    props<{err: string}>()
    );
    
