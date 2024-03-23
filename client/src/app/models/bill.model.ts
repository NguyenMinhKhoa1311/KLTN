import { Job } from "./job.model";
import { ServicePackage } from "./service-package.model";
import { Voucher } from "./voucher.model";

export interface Bill{
     _id: string;
     BillId: string,
     Voucher: Voucher,
     Job: Job,
     ServicePackage: ServicePackage,
     Total: number,
     Discount: number,
     GrandTotal: number,
     DatePayment: Date,
     createAt: Date;
     updateAt: Date;

}