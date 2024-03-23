import { Career } from "./career.model";
import { Field } from "./field.model";

export interface DesiredJob{
    _id: string;
     DesiredJobId: string,
     Location: string,
     Field: Field,
     Career: Career,
     Salary: number,
    createAt: Date;
    updateAt: Date;
}