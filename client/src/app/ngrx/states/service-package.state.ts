import { ServicePackage } from "../../models/service-package.model";

export interface ServicePackageState{
    servicePackagesTakenByGetAllAtCreateJob: ServicePackage[];
    isGetAllAtCreateJobSuccess: boolean;
    isGetAllAtCreateJobLoading: boolean;
    getAllAtCreateJobError: string;


}