import { Field } from "../../models/field.model";

export interface FieldState{
    fieldAtHome: Field[];
    isGetFieldAtHomeLoading: boolean;
    isGetFieldAtHomeSuccess: boolean;
    getFieldAtHomeError: string;
    
    fieldNoLimitAtJob: Field[];
    isGetAllNoLimitLoading: boolean;
    isGetAllNoLimitSuccess: boolean;
    getAllNoLimitError: string;

}