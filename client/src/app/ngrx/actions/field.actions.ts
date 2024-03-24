import { createAction, props } from "@ngrx/store";
import { Field } from "../../models/field.model";

export const getFieldAtHome = createAction(
    '[Field] Get Field At Home'
    );

export const getFieldAtHomeSuccess = createAction(
    '[Field] Get Field At Home Success',
    props<{fields: Field[]}>()
    );

export const getFieldAtHomeFailure = createAction(
    '[Field] Get Field At Home Failure',
    props<{err: string}>()
    );

export function getAllFieldsFailure(arg0: { error: any; }): any {
    throw new Error("Function not implemented.");
}
