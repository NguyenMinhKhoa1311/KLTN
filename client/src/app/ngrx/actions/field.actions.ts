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