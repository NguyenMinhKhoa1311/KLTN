import { Company } from "../../models/company.model";

export interface CompanyState{
    isGetAllAtCompanyLoading: boolean;
    isGetAllAtCompanySuccess: boolean;
    getAllAtCompanyError: string;
    companysTakenByGetAllAtCompany: Company[];

} 