import { Company } from "../../models/company.model";

export interface CompanyState{
    isGetAllAndSortAtHomeLoading: boolean;
    isGetAllAndSortAtHomeSuccess: boolean;
    getAllAndSortAtHomeError: string;
    companysTakenByGetAllAndSortAtHome: Company[];

} 