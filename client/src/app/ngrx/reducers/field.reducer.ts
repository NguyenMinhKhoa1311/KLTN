import { createReducer, on } from "@ngrx/store";
import { FieldState } from "../states/field.state";
import * as FieldActions from "../actions/field.actions";

export const initualState: FieldState = {
    fieldAtHome: [],
    isGetFieldAtHomeLoading: false,
    isGetFieldAtHomeSuccess: false,
    getFieldAtHomeError: ''
}

export const fieldReducer = createReducer(
    initualState,
    on(FieldActions.getFieldAtHome, (state,action) =>{
        return {
            ...state,
            isGetFieldAtHomeLoading: true,
            isGetFieldAtHomeSuccess: false,
            getFieldAtHomeError: ''
        }
    }),
    on(FieldActions.getFieldAtHomeSuccess, (state, action) =>{
        return {
            ...state,
            fieldAtHome: action.fields,
            isGetFieldAtHomeLoading: false,
            isGetFieldAtHomeSuccess: true,
            getFieldAtHomeError: ''
        }
    }),
    on(FieldActions.getFieldAtHomeFailure, (state, action) =>{
        return {
            ...state,
            isGetFieldAtHomeLoading: false,
            isGetFieldAtHomeSuccess: false,
            getFieldAtHomeError: action.err
        }
    })
)