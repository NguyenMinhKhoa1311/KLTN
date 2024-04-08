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

    careersTakenByGetByFieldAtProfile: Career[];
    isGetByFieldAtProfileLoading: boolean;
    isGetByFieldAtProfileSuccess: boolean;
    getByFieldAtProfileError: string;

    isGetAllAtCreateJobLoading: boolean;
    isGetAllAtCreateJobSuccess: boolean;
    careersTakenByGetAllAtCreateJob: Career[];
    getAllAtCreateJobError: string;

    isGetByFieldAtCreateJobLoading: boolean;
    isGetByFieldAtCreateJobSuccess: boolean;
    careersTakenByGetByFieldAtCreateJob: Career[];
    getByFieldAtCreateJobError: string;

    isGetByFieldAtUpdateProfileLoading: boolean;
    isGetByFieldAtUpdateProfileSuccess: boolean;
    careersTakenByGetByFieldAtUpdateProfile: Career[];
    careerTakentByGetByFieldAtUpdateProfileError: string;

    isGetAllAtProfileLoading: boolean;
    isGetAllAtProfileSuccess: boolean;
    careersTakenByGetAllAtProfile: Career[];
    getAllAtProfileError: string;



}
