import { createAction, props } from "@ngrx/store";
import { Job } from "../../models/job.model";









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCareerAtHome = createAction(
    '[Job] Get By Career At Home',
    props<{ career: string; page: number; limit: number}>()
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
    props<{ page: number; limit: number}>()
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
    props<{ page: number; limit: number}>()
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
    props<{ fieldName: string; page: number; limit: number }>()
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
    props<{ careerName: string; page: number; limit: number }>()
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
    props<{ job: any,token: string }>()
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
    props<{ job: any, id: string,token:string }>()
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
    props<{ recruiter: string,page: number, limit: number }>()
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
    props<{ location: string, page: number, limit: number}>()
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
    props<{ company: string, page: number, limit: number }>()
);
export const getByCompanyAtCompanyDetailSuccess = createAction(
    '[Job] Get By Company Success At Company Detail',
    props<{ jobs: Job[] }>()
);
export const getByCompanyAtCompanyDetailFailure = createAction(
    '[Job] Get By Company Failure At Company Detail',
    props<{ error: string }>()
);



////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAndSortByWelfareAndSalaryAtSeeAll = createAction(
    '[Job] Get All And Sort At See All',
    props<{ page: number, limit: number }>()
);
export const getAllAndSortByWelfareAndSalaryAtSeeAllSuccess = createAction(
    '[Job] Get All And Sort At See All Success',
    props<{ jobs: Job[] }>()
);
export const getAllAndSortByWelfareAndSalaryAtSeeAllFailure = createAction(
    '[Job] Get All And Sort At See All Failure',
    props<{ error: string }>()
);



////////////////////////////////////////////////////////////////////////////////////////////////
export const getByHotJobAtSeeAll = createAction(
    '[Job] Get By Hot Job At See All',
    props<{ page: number, limit: number }>()
);
export const getByHotJobAtSeeAllSuccess = createAction(
    '[Job] Get By Hot Job At See All Success',
    props<{ jobs: Job[] }>()
);
export const getByHotJobAtSeeAllFailure = createAction(
    '[Job] Get By Hot Job At See All Failure',
    props<{ error: string }>()
);









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByJobIdAtApplyJob = createAction(
    '[Job] Get By Job Id At Apply Job',
    props<{ id: string }>()
);
export const getByJobIdAtApplyJobSuccess = createAction(
    '[Job] Get By Job Id At Apply Job Success',
    props<{ job: Job }>()
);
export const getByJobIdAtApplyJobFailure = createAction(
    '[Job] Get By Job Id At Apply Job Failure',
    props<{ error: string }>()
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteAtJobDetailOfRecruiter = createAction(
    '[Job] Delete Job',
    props<{ id: string, companyId: string, careerId: string, fieldId: string,token: string }>()
);
export const deleteAtJobDetailOfRecruiterSuccess = createAction(
    '[Job] Delete Job Success',
);
export const deleteAtJobDetailOfRecruiterFailure = createAction(
    '[Job] Delete Job Failure',
    props<{ error: string }>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateRecruitmentAtJobDetail = createAction(
    '[Job] Update Recruitment At Job Detail',
    props<{ recruitment: any, id: string, token: string }>()
);
export const updateRecruitmentAtJobDetailFailure = createAction(
    '[Job] Update Recruitment At Job Detail Failure',
    props<{ error: string }>()
);

export const updateRecruitmentAtJobDetailSuccess = createAction(
    '[Job] Update Recruitment At Job Detail Success',
    props<{ job: Job }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByKeywordAtJob = createAction(
    '[Job] Get by Keyword At Job',
    props<{ keyword: string, page: number, limit: number }>()
)
export const getByKeywordAtJobSuccess = createAction(
    '[Job] Get by Keyword At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByKeywordAtJobFailure = createAction(
    '[Job] Get by Keyword At Job Failure',
    props<{ error: string }>()
)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetState = createAction(
    '[Job] Reset State'
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByTagAtJob = createAction(
    '[Job] Get By Tag At Job',
    props<{ tag: string, page: number, limit: number }>()
)
export const getByTagAtJobSuccess = createAction(
    '[Job] Get By Tag At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByTagAtJobFailure = createAction(
    '[Job] Get By Tag At Job Failure',
    props<{ error: string }>()
)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByCareerNameWithUrgentAtJob = createAction(
    '[Job] Get By Career Name With Urgent At Job',
    props<{ careerName: string, page: number, limit: number, urgent: boolean }>()
)
export const getByCareerNameWithUrgentAtJobSuccess = createAction(
    '[Job] Get By Career Name With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByCareerNameWithUrgentAtJobFailure = createAction(
    '[Job] Get By Career Name With Urgent At Job Failure',
    props<{ error: string }>()
)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldWithUrgentAtJob = createAction(
    '[Job] Get By Field With Urgent At Job',
    props<{ field: string, page: number, limit: number, urgent: boolean }>()
)
export const getByFieldWithUrgentAtJobSuccess = createAction(
    '[Job] Get By Field With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByFieldWithUrgentAtJobFailure = createAction(
    '[Job] Get By Field With Urgent At Job Failure',
    props<{ error: string }>()
)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldNameWithUrgentAtJob = createAction(
    '[Job] Get By Field Name With Urgent At Job',
    props<{ fieldName: string, page: number, limit: number, urgent: boolean }>()
)
export const getByFieldNameWithUrgentAtJobSuccess = createAction(
    '[Job] Get By Field Name With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByFieldNameWithUrgentAtJobFailure = createAction(
    '[Job] Get By Field Name With Urgent At Job Failure',
    props<{ error: string }>()
)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByLocationdWithKeywordsWithUrgentAtJob = createAction(
    '[Job] Get By Location With Keywords With Urgent At Job',
    props<{ location: string, page: number, limit: number, urgent: boolean }>()
)
export const getByLocationdWithKeywordsWithUrgentAtJobSuccess = createAction(
    '[Job] Get By Location With Keywords With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByLocationdWithKeywordsWithUrgentAtJobFailure = createAction(
    '[Job] Get By Location With Keywords With Urgent At Job Failure',
    props<{ error: string }>()
)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByKeywordWithUrgentAtJob = createAction(
    '[Job] Get by Keyword With Urgent At Job',
    props<{ keyword: string, page: number, limit: number, urgent: boolean }>()
)
export const getByKeywordWithUrgentAtJobSuccess = createAction(
    '[Job] Get by Keyword With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByKeywordWithUrgentAtJobFailure = createAction(
    '[Job] Get by Keyword With Urgent At Job Failure',
    props<{ error: string }>()
)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByTagWithUrgentAtJob = createAction(
    '[Job] Get By Tag With Urgent At Job',
    props<{ tag: string, page: number, limit: number, urgent: boolean }>()
)
export const getByTagWithUrgentAtJobSuccess = createAction(
    '[Job] Get By Tag With Urgent At Job Success',
    props<{ jobs: Job[] }>()
)
export const getByTagWithUrgentAtJobFailure = createAction(
    '[Job] Get By Tag With Urgent At Job Failure',
    props<{ error: string }>()
)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAndSortWithUrgentAtJob = createAction(
    '[Job] Get All And Sort With Urgent At Job',
    props<{ page: number; limit: number; urgent: boolean }>()
);
export const getAllAndSortWithUrgentAtJobSuccess = createAction(
    '[Job] Get All And Sort With Urgent At Job Success',
    props<{ jobs: Job[] }>()
);
export const getAllAndSortWithUrgentAtJobFailure = createAction(
    '[Job] Get All And Sort With Urgent At Job Failure',
    props<{ error: string }>()
);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAndSortByWelfareAndSalaryAtHome = createAction(
    '[Job] Get All And Sort By Welfare And Salary At Home',
    props<{ page: number; limit: number }>()
);
export const getAllAndSortByWelfareAndSalaryAtHomeSuccess = createAction(
    '[Job] Get All And Sort By Welfare And Salary At Home Success',
    props<{ jobs: Job[] }>()
);
export const getAllAndSortByWelfareAndSalaryAtHomeFailure = createAction(
    '[Job] Get All And Sort By Welfare And Salary At Home Failure',
    props<{ error: string }>()
);