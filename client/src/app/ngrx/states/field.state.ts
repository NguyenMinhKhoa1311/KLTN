import { Field } from "../../models/field.model";

export interface FieldState{
    fieldAtHome: Field[];
    isGetFieldAtHomeLoading: boolean;
    isGetFieldAtHomeSuccess: boolean;
    getFieldAtHomeError: string;
    

}