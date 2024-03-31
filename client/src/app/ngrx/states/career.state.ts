import { Career } from "../../models/career.model";

export interface CareerState{
    careersTakenByGetAllAtJob: Career[];
    isGetAllAtJobLoading: boolean;
    isGetAllAtJobSuccess: boolean;
    getAllAtJobError: string;

    careersTakenByGetByFieldNameAtJob: Career[];
    isGetByFieldNameAtJobLoading: boolean;
    isGetByFieldNameAtJobSuccess: boolean;
    getByFieldNameAtJobError: string;

    careersTakenByGetAllAtCreateProfile: Career[];
    isGetAllAtCreateProfileLoading: boolean;
    isGetAllAtCreateProfileSuccess: boolean;
    getAllAtCreateProfileError: string;

}
