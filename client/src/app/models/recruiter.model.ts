import { Company } from "./company.model";
import { Storage } from "./storage.model";
import { User } from "./user.model";
import { Voucher } from "./voucher.model";

export interface Recruiter{
    _id: string;
      RecruiterId: string,
     User: User,
      Name: string,
      Storage: Storage,
      Avatar: string,
      Phone: string,
      voucher: Voucher[],
      Address: string,
     Company: Company
    createAt: Date;
    updateAt: Date;
    isBan: boolean;
}