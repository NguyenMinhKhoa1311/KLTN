import { createAction, props } from "@ngrx/store";
import { Job } from "../../models/job.model";

export const getByFieldAtHome = createAction(
    '[Job] Get By Field At Home',
    props<{ field: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getByFieldAtHomeSuccess = createAction(
    '[Job] Get By Field At Home Success',
    props<{ jobs: Job[] }>()
);
export const getByFieldAtHomeFailure = createAction(
    '[Job] Get By Field At Home Failure',
    props<{ error: string }>()
);







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCareerAtHome = createAction(
    '[Job] Get By Career At Home',
    props<{ career: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getByCareerAtHomeSuccess = createAction(
    '[Job] Get By Career At Home Success',
    props<{ jobs: Job[] }>()
);
export const getByCareerAtHomeFailure = createAction(
    '[Job] Get By Career At Home Failure',
    props<{ error: string }>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByHotJobAtHome = createAction(
    '[Job] Get By Hot Job At Home',
    props<{ page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getByHotJobAtHomeSuccess = createAction(
    '[Job] Get By Hot Job At Home Success',
    props<{ jobs: Job[] }>()
);
export const getByHotJobAtHomeFailure = createAction(
    '[Job] Get By Hot Job At Home Failure',
    props<{ error: string }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const clearStateAtHome = createAction(
    '[Job] Clear State'
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAndSortAtJob = createAction(
    '[Job] Get All And Sort At Job',
    props<{ page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getAllAndSortAtJobSuccess = createAction(
    '[Job] Get All And Sort At Job Success',
    props<{ jobs: Job[] }>()
);
export const getAllAndSortAtJobFailure = createAction(
    '[Job] Get All And Sort At Job Failure',
    props<{ error: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldNameAtJob = createAction(
    '[Job] Get By Field Name At Job',
    props<{ fieldName: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getByFieldNameAtJobSuccess = createAction(
    '[Job] Get By Field Name At Job Success',
    props<{ jobs: Job[] }>()
);
export const getByFieldNameAtJobFailure = createAction(
    '[Job] Get By Field Name At Job Failure',
    props<{ error: string }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCareerNameAtJob = createAction(
    '[Job] Get By Career Name At Job',
    props<{ careerName: string; page: number; limit: number; sortBy: string; sortOrder: string }>()
);
export const getByCareerNameAtJobSuccess = createAction(
    '[Job] Get By Career Name At Job Success',
    props<{ jobs: Job[] }>()
);
export const getByCareerNameAtJobFailure = createAction(
    '[Job] Get By Career Name At Job Failure',
    props<{ error: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createJobAtJob = createAction(
    '[Job] Create Job',
    props<{ job: any }>()
);
export const createJobAtJobSuccess = createAction(
    '[Job] Create Job Success'
);
export const createJobAtJobFailure = createAction(
    '[Job] Create Job Failure',
    props<{ error: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateJobAtJobDetail = createAction(
    '[Job] Update Job',
    props<{ job: any, id: string }>()
);
export const updateJobAtJobDetailFailure = createAction(
    '[Job] Update Job Failure',
    props<{ error: string }>()
);
export const updateJobAtJobDetailSuccess = createAction(
    '[Job] Update Job Success',
    props<{ job: Job }>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getJobByRecruiterAtJobDetail = createAction(
    '[Job] Get Job By recruiter',
    props<{ recruiter: string,page: number, limit: number, sortBy: string, sortOrder: string }>()
);
export const getJobByRecruiterAtJobDetailFailure = createAction(
    '[Job] Get JobBy recruiter Failure',
    props<{ error: string }>()
);
export const getJobByRecruiterAtJobDetailSuccess = createAction(
    '[Job] Get Job By recruiter Success',
    props<{ jobs: Job[] }>()
);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByLocationdWithKeywordsAtJob = createAction(
    '[Job] Get By Location With Keywords',
    props<{ location: string, page: number, limit: number, sortBy: string, sortOrder: string }>()
);
export const getByLocationdWithKeywordsAtJobSuccess = createAction(
    '[Job] Get By Location With Keywords Success',
    props<{ jobs: Job[] }>()
);
export const getByLocationdWithKeywordsAtJobFailure = createAction(
    '[Job] Get By Location With Keywords Failure',
    props<{ error: string }>()
);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getJobByIdAtJobDetailOfCandidate = createAction(
    '[Job] Get Job By Id',
    props<{ id: string }>()
);
export const getJobByIdAtJobDetailOfCandidateFailure = createAction(
    '[Job] Get Job By Id Failure',
    props<{ error: string }>()
);
export const getJobByIdAtJobDetailOfCandidateSuccess = createAction(
    '[Job] Get Job By Id Success',
    props<{ job: Job }>()
);







////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCompanyAtCompanyDetail = createAction(
    '[Job] Get By Company At Company Detail',
    props<{ company: string, page: number, limit: number, sortBy: string, sortOrder: string }>()
);
export const getByCompanyAtCompanyDetailSuccess = createAction(
    '[Job] Get By Company Success At Company Detail',
    props<{ jobs: Job[] }>()
);
export const getByCompanyAtCompanyDetailFailure = createAction(
    '[Job] Get By Company Failure At Company Detail',
    props<{ error: string }>()
);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldAtJob = createAction(
    '[Job] Get By Field At Job',
    props<{ field: string, page: number, limit: number, sortBy: string, sortOrder: string }>()
);
export const getByFieldAtJobSuccess = createAction(
    '[Job] Get By Field At Job Success',
    props<{ jobs: Job[] }>()
);
export const getByFieldAtJobFailure = createAction(
    '[Job] Get By Field At Job Failure',
    props<{ error: string }>()
);
