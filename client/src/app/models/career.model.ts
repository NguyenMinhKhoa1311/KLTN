import { Field } from "./field.model";

export interface Career{
    _id: string;
     CareerId: string,
     Field: Field
     Name: string
        Quantity: number,
    createAt: Date;
    updateAt: Date;
}