import { Field } from "./field.model";

export interface Career{
    _id: string;
     CareerId: string,
     Field: Field
     Name: string
    createAt: Date;
    updateAt: Date;
}