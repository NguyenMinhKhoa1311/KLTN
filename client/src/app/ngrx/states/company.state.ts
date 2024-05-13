import { Company } from "../../models/company.model";

export interface CompanyState{
    isGetAllAndSortAtHomeLoading: boolean;
    isGetAllAndSortAtHomeSuccess: boolean;
    getAllAndSortAtHomeError: string;
    companysTakenByGetAllAndSortAtHome: Company[];


    isGetByIdAtCompanyDetailLoading: boolean;
    isGetByIdAtCompanyDetailSuccess: boolean;
    getByIdAtCompanyDetailError: string;
    companyTakenByGetByIdAtCompanyDetail: Company;



    isGetAllAndSortAtCompanyLoading: boolean;
    isGetAllAndSortAtCompanySuccess: boolean;
    getAllAndSortAtCompanyError: string;
    companysTakenByGetAllAndSortAtCompany: Company[];

    isGetByNameWithKeywordAtCompanyLoading: boolean;
    isGetByNameWithKeywordAtCompanySuccess: boolean;
    getByNameWithKeywordAtCompanyError: string;
    companysTakenByGetByNameWithKeywordAtCompany: Company[];
    
    
} 