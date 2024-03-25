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

