import { Career } from "../../models/career.model";

export interface CareerState{
    careersTakenByGetAllAtJob: Career[];
    isGetAllAtJobLoading: boolean;
    isGetAllAtJobSuccess: boolean;
    getAllAtJobError: string;
}
