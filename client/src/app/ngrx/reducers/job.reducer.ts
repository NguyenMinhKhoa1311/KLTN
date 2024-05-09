import { State, createReducer, on } from "@ngrx/store";
import { jobState } from "../states/job.state";
import * as JobActions from "../actions/job.actions"
import { Job } from "../../models/job.model";

export const initialState: jobState = {


    jobTakenByCareerAtHome: [],
    isGetByCareerAtHomeLoading: false,
    isGetByCareerAtHomeSuccess: false,
    getByCareerAtHomeError: "",

    jobTakenByHotJobAtHome: [],
    isGetByHotJobAtHomeLoading: false,
    isGetByHotJobAtHomeSuccess: false,
    getByHotJobAtHomeError: "",

    JobTakenBygetAllAndSortAtJob: [],
    isGetAllAndSortAtJobLoading: false,
    isGetAllAndSortAtJobSuccess: false,
    getAllAndSortAtJobError: "",

    JobTakenByFieldNameAtJob: [],
    isGetByFieldNameAtJobLoading: false,
    isGetByFieldNameAtJobSuccess: false,
    getByFieldNameAtJobError: "",

    JobTakenByCareerNameAtJob: [],
    isGetByCareerNameAtJobLoading: false,
    isGetByCareerNameAtJobSuccess: false,
    getByCareerNameAtJobError: "",


    isCreateJobAtCreateJobLoading: false,
    isCreateJobAtCreateJobSuccess: false,
    createJobAtCreateJobError: "",

    isUpdateJobAtJobDetailSuccess: false,
    isUpdateJobAtJobDetailLoading: false,
    updateJobAtUJobDetailError: "",
    jobUpdatedAtJobDetail: <Job>{},

    isGetByRecruiterAtJobDetailSuccess: false,
    isGetByRecruiterAtJobDetailLoading: false,
    getByRecruiterAtJobDetailError: "",
    jobsTakenByRecruiterAtJobDetail: [],

    isGetByLocationAtJobLoading: false,
    isGetByLocationAtJobSuccess: false,
    getByLocationAtJobError: "",
    jobsTakenByLocationAtJob: [],

    isGetByIdAtJobDetailOfCandidateLoading: false,
    isGetByIdAtJobDetailOfCandidateSuccess: false,
    getByIdAtJobDetailOfCandidateError: "",
    jobTakenByIdAtJobDetailOfCandidate: <Job>{},

    isGetByCompanyAtCompanyDetailLoading: false,
    isGetByCompanyAtCompanyDetailSuccess: false,
    getByCompanyAtCompanyDetailError: "",
    jobsTakenByCompanyAtCompanyDetail: [],



    isGetByJobIdAtApplyJobLoading: false,
    isGetByJobIdAtApplyJobSuccess: false,
    getByJobIdAtApplyJobError: "",
    jobTakenByJobIdAtApplyJob: <Job>{},

    isDeleteAtJobDetailfRecruiterLoading: false,
    isDeleteAtJobDetailfRecruiterSuccess: false,
    deleteAtJobDetailOfRecruiterError: "",

    isUpdateRecruitmentJobDetailLoading: false,
    isUpdateRecruitmentJobDetailSuccess: false,
    updateRecruitmentJobDetailError: "",
    JobUpdatedRecruitmentAtJobDetail: <Job>{},

    isGetByKeywordAtJobLoading: false,
    isGetByKeywordAtJobSuccess: false,
    getByKeywordAtJobError: "",
    jobsTakenByKeywordAtJob: [],
    
    isGetByTagAtJobLoading: false,
    isGetByTagAtJobSuccess: false,
    getByTagAtJobError: "",
    jobsTakenByTagAtJob: [],

    isGetByCareerNameWithUrgentAtJobLoading: false,
    isGetByCareerNameWithUrgentAtJobSuccess: false,
    getByCareerNameWithUrgentAtJobError: "",
    jobsTakenByCareerNameWithUrgentAtJob: [],

    isGetByFieldNameWithUrgentAtJobLoading: false,
    isGetByFieldNameWithUrgentAtJobSuccess: false,
    getByFieldNameWithUrgentAtJobError: "",
    jobsTakenByFieldNameWithUrgentAtJob: [],

    isGetByKeywordWithUrgentAtJobLoading: false,
    isGetByKeywordWithUrgentAtJobSuccess: false,
    getByKeywordWithUrgentAtJobError: "",
    jobsTakenByKeywordWithUrgentAtJob: [],

    isGetByTagWithUrgentAtJobLoading: false,
    isGetByTagWithUrgentAtJobSuccess: false,
    getByTagWithUrgentAtJobError: "",
    jobsTakenByTagWithUrgentAtJob: [],

    isGetByFieldWithUrgentAtJobLoading: false,
    isGetByFieldWithUrgentAtJobSuccess: false,
    getByFieldWithUrgentAtJobError: "",
    jobsTakenByFieldWithUrgentAtJob: [],

    isGetByLocationWithUrgentAtJobLoading: false,
    isGetByLocationWithUrgentAtJobSuccess: false,
    getByLocationWithUrgentAtJobError: "",
    jobsTakenByLocationWithUrgentAtJob: [],

    isGetAllAndSortWithUrgentAtJobLoading: false,
    isGetAllAndSortWithUrgentAtJobSuccess: false,
    getAllAndSortWithUrgentAtJobError: "",
    jobsTakenByAllAndSortWithUrgentAtJob: [],

    isGetAllAndSortByWelfareAndSalaryAtHomeLoading: false,
    isGetAllAndSortByWelfareAndSalaryAtHomeSuccess: false,
    getAllAndSortByWelfareAndSalaryAtHomeError: "",
    jobsTakenByAllAndSortByWelfareAndSalaryAtHome: [],


}

export const jobReducer = createReducer(
    initialState,







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByCareerAtHome,(state,action)=>{
        return{
            ...state,
            isGetByCareerAtHomeLoading: true,
            isGetByCareerAtHomeSuccess: false,
            getByCareerAtHomeError: "",
        }
    }),
    on(JobActions.getByCareerAtHomeSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByCareerAtHome: action.jobs,
            isGetByCareerAtHomeLoading: false,
            isGetByCareerAtHomeSuccess: true,
            getByCareerAtHomeError: "",
        }
    }),
    on(JobActions.getByCareerAtHomeFailure,(state,action)=>{
        return{
            ...state,
            isGetByCareerAtHomeLoading: false,
            isGetByCareerAtHomeSuccess: false,
            getByCareerAtHomeError: action.error,
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByHotJobAtHome,(state,action)=>{
        return{
            ...state,
            isGetByHotJobAtHomeLoading: true,
            isGetByHotJobAtHomeSuccess: false,
            getByHotJobAtHomeError: "",
        }
    }),
    on(JobActions.getByHotJobAtHomeSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByHotJobAtHome: action.jobs,
            isGetByHotJobAtHomeLoading: false,
            isGetByHotJobAtHomeSuccess: true,
            getByHotJobAtHomeError: "",
        }
    }),
    on(JobActions.getByHotJobAtHomeFailure,(state,action)=>{
        return{
            ...state,
            isGetByHotJobAtHomeLoading: false,
            isGetByHotJobAtHomeSuccess: false,
            getByHotJobAtHomeError: action.error,
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.clearStateAtHome,(state,action)=>{
        return initialState;
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getAllAndSortAtJob,(state,action)=>{
        return{
            ...state,
            isGetAllAndSortAtJobLoading: true,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: "",
        }
    }),
    on(JobActions.getAllAndSortAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenBygetAllAndSortAtJob: action.jobs,
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: true,
            getAllAndSortAtJobError: "",
        }
    }),
    on(JobActions.getAllAndSortAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetAllAndSortAtJobLoading: false,
            isGetAllAndSortAtJobSuccess: false,
            getAllAndSortAtJobError: action.error,
        }
    }),





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByFieldNameAtJob,(state,action)=>{
        return{
            ...state,
            isGetByFieldNameAtJobLoading: true,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: "",
        }
    }),
    on(JobActions.getByFieldNameAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenByFieldNameAtJob: action.jobs,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: true,
            getByFieldNameAtJobError: "",
        }
    }),
    on(JobActions.getByFieldNameAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: action.error,
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByCareerNameAtJob,(state,action)=>{
        return{
            ...state,
            isGetByCareerNameAtJobLoading: true,
            isGetByCareerNameAtJobSuccess: false,
            getByCareerNameAtJobError: "",
        }
    }),
    on(JobActions.getByCareerNameAtJobSuccess,(state,action)=>{
        return{
            ...state,
            JobTakenByCareerNameAtJob: action.jobs,
            isGetByCareerNameAtJobLoading: false,
            isGetByCareerNameAtJobSuccess: true,
            getByCareerNameAtJobError: "",
        }
    }),
    on(JobActions.getByCareerNameAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByCareerNameAtJobLoading: false,
            isGetByCareerNameAtJobSuccess: false,
            getByCareerNameAtJobError: action.error,
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.createJobAtJob,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: true,
            isCreateJobAtCreateJobSuccess: false,
            createJobAtCreateJobError: "",
        }
    }),
    on(JobActions.createJobAtJobSuccess,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: false,
            isCreateJobAtCreateJobSuccess: true,
            createJobAtCreateJobError: "",
        }
    }),
    on(JobActions.createJobAtJobFailure,(state,action)=>{
        return{
            ...state,
            isCreateJobAtCreateJobLoading: false,
            isCreateJobAtCreateJobSuccess: false,
            createJobAtCreateJobError: action.error,
        }
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.updateJobAtJobDetail,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: true,
            isUpdateJobAtJobDetailSuccess: false,
            updateJobAtUJobDetailError: "",
        }
    }),
    on(JobActions.updateJobAtJobDetailSuccess,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: false,
            isUpdateJobAtJobDetailSuccess: true,
            updateJobAtUJobDetailError: "",
            jobUpdatedAtJobDetail: action.job
        }
    }),
    on(JobActions.updateJobAtJobDetailFailure,(state,action)=>{
        return{
            ...state,
            isUpdateJobAtJobDetailLoading: false,
            isUpdateJobAtJobDetailSuccess: false,
            updateJobAtUJobDetailError: action.error,
        }
    }),





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getJobByRecruiterAtJobDetail,(state,action)=>{
        return{
            ...state,
            isGetByRecruiterAtJobDetailLoading: true,
            isGetByRecruiterAtJobDetailSuccess: false,
            getByRecruiterAtJobDetailError: "",
        }
    }),
    on(JobActions.getJobByRecruiterAtJobDetailSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByRecruiterAtJobDetail: action.jobs,
            isGetByRecruiterAtJobDetailLoading: false,
            isGetByRecruiterAtJobDetailSuccess: true,
            getByRecruiterAtJobDetailError: "",
        }
    }),
    on(JobActions.getJobByRecruiterAtJobDetailFailure,(state,action)=>{
        return{
            ...state,
            isGetByRecruiterAtJobDetailLoading: false,
            isGetByRecruiterAtJobDetailSuccess: false,
            getByRecruiterAtJobDetailError: action.error,
        }
    }),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByLocationdWithKeywordsAtJob,(state,action)=>{
        return{
            ...state,
            isGetByLocationAtJobLoading: true,
            isGetByLocationAtJobSuccess: false,
            getByLocationAtJobError: "",
        }
    }),
    on(JobActions.getByLocationdWithKeywordsAtJobSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByLocationAtJob: action.jobs,
            isGetByLocationAtJobLoading: false,
            isGetByLocationAtJobSuccess: true,
            getByLocationAtJobError: "",
        }
    }),
    on(JobActions.getByLocationdWithKeywordsAtJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByLocationAtJobLoading: false,
            isGetByLocationAtJobSuccess: false,
            getByLocationAtJobError: action.error,
        }
    }),







    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getJobByIdAtJobDetailOfCandidate,(state,action)=>{
        return{
            ...state,
            isGetByIdAtJobDetailOfCandidateLoading: true,
            isGetByIdAtJobDetailOfCandidateSuccess: false,
            getByIdAtJobDetailOfCandidateError: "",
        }
    }),
    on(JobActions.getJobByIdAtJobDetailOfCandidateSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByIdAtJobDetailOfCandidate: action.job,
            isGetByIdAtJobDetailOfCandidateLoading: false,
            isGetByIdAtJobDetailOfCandidateSuccess: true,
            getByIdAtJobDetailOfCandidateError: "",
        }
    }),
    on(JobActions.getJobByIdAtJobDetailOfCandidateFailure,(state,action)=>{
        return{
            ...state,
            isGetByIdAtJobDetailOfCandidateLoading: false,
            isGetByIdAtJobDetailOfCandidateSuccess: false,
            getByIdAtJobDetailOfCandidateError: action.error,
        }
    }),


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByCompanyAtCompanyDetail,(state,action)=>{
        return{
            ...state,
            isGetByCompanyAtCompanyDetailLoading: true,
            isGetByCompanyAtCompanyDetailSuccess: false,
            getByCompanyAtCompanyDetailError: "",
        }
    }),
    on(JobActions.getByCompanyAtCompanyDetailSuccess,(state,action)=>{
        return{
            ...state,
            jobsTakenByCompanyAtCompanyDetail: action.jobs,
            isGetByCompanyAtCompanyDetailLoading: false,
            isGetByCompanyAtCompanyDetailSuccess: true,
            getByCompanyAtCompanyDetailError: "",
        }
    }),
    on(JobActions.getByCompanyAtCompanyDetailFailure,(state,action)=>{
        return{
            ...state,
            isGetByCompanyAtCompanyDetailLoading: false,
            isGetByCompanyAtCompanyDetailSuccess: false,
            getByCompanyAtCompanyDetailError: action.error,
        }
    }),





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.getByJobIdAtApplyJob,(state,action)=>{
        return{
            ...state,
            isGetByJobIdAtApplyJobLoading: true,
            isGetByJobIdAtApplyJobSuccess: false,
            getByJobIdAtApplyJobError: "",
        }
    }),
    on(JobActions.getByJobIdAtApplyJobSuccess,(state,action)=>{
        return{
            ...state,
            jobTakenByJobIdAtApplyJob: action.job,
            isGetByJobIdAtApplyJobLoading: false,
            isGetByJobIdAtApplyJobSuccess: true,
            getByJobIdAtApplyJobError: "",
        }
    }),
    on(JobActions.getByJobIdAtApplyJobFailure,(state,action)=>{
        return{
            ...state,
            isGetByJobIdAtApplyJobLoading: false,
            isGetByJobIdAtApplyJobSuccess: false,
            getByJobIdAtApplyJobError: action.error,
        }
    }),



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(JobActions.deleteAtJobDetailOfRecruiter,(state,action)=>{
        console.log(action.type);
        return{
            ...state,
            isDeleteAtJobDetailfRecruiterLoading: true,
            isDeleteAtJobDetailfRecruiterSuccess: false,
            deleteAtJobDetailOfRecruiterError: "",
        }
    }),
    on(JobActions.deleteAtJobDetailOfRecruiterSuccess,(state,action)=>{
        console.log(action.type);
        return{
            ...state,
            isDeleteAtJobDetailfRecruiterLoading: false,
            isDeleteAtJobDetailfRecruiterSuccess: true,
            deleteAtJobDetailOfRecruiterError: "",
        }
    }),
    on(JobActions.deleteAtJobDetailOfRecruiterFailure,(state,action)=>{
        console.log(action.type);
        return{
            ...state,
            isDeleteAtJobDetailfRecruiterLoading: false,
            isDeleteAtJobDetailfRecruiterSuccess: false,
            deleteAtJobDetailOfRecruiterError: action.error,
        }
    }),



        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        on(JobActions.updateRecruitmentAtJobDetail,(state,action)=>{
            return{
                ...state,
                isUpdateRecruitmentJobDetailLoading: true,
                isUpdateRecruitmentJobDetailSuccess: false,
                updateRecruitmentJobDetailError: "",
            }
        }),
        on(JobActions.updateRecruitmentAtJobDetailSuccess,(state,action)=>{
            return{
                ...state,
                isUpdateRecruitmentJobDetailLoading: false,
                isUpdateRecruitmentJobDetailSuccess: true,
                updateRecruitmentJobDetailError: "",
                JobUpdatedRecruitmentAtJobDetail: action.job
            }
        }),
        on(JobActions.updateRecruitmentAtJobDetailFailure,(state,action)=>{
            return{
                ...state,
                isUpdateRecruitmentJobDetailLoading: false,
                isUpdateRecruitmentJobDetailSuccess: false,
                updateRecruitmentJobDetailError: action.error,
            }
        }),






        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        on(JobActions.getByKeywordAtJob,(state,action)=>{
            return{
                ...state,
                isGetByKeywordAtJobLoading: true,
                isGetByKeywordAtJobSuccess: false,
                getByKeywordAtJobError: "",
            }
        }),
        on(JobActions.getByKeywordAtJobSuccess,(state,action)=>{
            return{
                ...state,
                jobsTakenByKeywordAtJob: action.jobs,
                isGetByKeywordAtJobLoading: false,
                isGetByKeywordAtJobSuccess: true,
                getByKeywordAtJobError: "",
            }
        }),
        on(JobActions.getByKeywordAtJobFailure,(state,action)=>{
            return{
                ...state,
                isGetByKeywordAtJobLoading: false,
                isGetByKeywordAtJobSuccess: false,
                getByKeywordAtJobError: action.error,
            }
        }),
        




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        on(JobActions.resetState,(state,action)=>{
            return initialState;
        }),





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByTagAtJob,(state,action)=>{
    return{
        ...state,
        isGetByTagAtJobLoading: true,
        isGetByTagAtJobSuccess: false,
        getByTagAtJobError: "",
    }
}),
on(JobActions.getByTagAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByTagAtJob: action.jobs,
        isGetByTagAtJobLoading: false,
        isGetByTagAtJobSuccess: true,
        getByTagAtJobError: "",
    }
}),
on(JobActions.getByTagAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByTagAtJobLoading: false,
        isGetByTagAtJobSuccess: false,
        getByTagAtJobError: action.error,
    }
}),


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByCareerNameWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByCareerNameWithUrgentAtJobLoading: true,
        isGetByCareerNameWithUrgentAtJobSuccess: false,
        getByCareerNameWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByCareerNameWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByCareerNameWithUrgentAtJob: action.jobs,
        isGetByCareerNameWithUrgentAtJobLoading: false,
        isGetByCareerNameWithUrgentAtJobSuccess: true,
        getByCareerNameWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByCareerNameWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByCareerNameWithUrgentAtJobLoading: false,
        isGetByCareerNameWithUrgentAtJobSuccess: false,
        getByCareerNameWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByFieldNameWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByFieldNameWithUrgentAtJobLoading: true,
        isGetByFieldNameWithUrgentAtJobSuccess: false,
        getByFieldNameWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByFieldNameWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByFieldNameWithUrgentAtJob: action.jobs,
        isGetByFieldNameWithUrgentAtJobLoading: false,
        isGetByFieldNameWithUrgentAtJobSuccess: true,
        getByFieldNameWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByFieldNameWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByFieldNameWithUrgentAtJobLoading: false,
        isGetByFieldNameWithUrgentAtJobSuccess: false,
        getByFieldNameWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByKeywordWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByKeywordWithUrgentAtJobLoading: true,
        isGetByKeywordWithUrgentAtJobSuccess: false,
        getByKeywordWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByKeywordWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByKeywordWithUrgentAtJob: action.jobs,
        isGetByKeywordWithUrgentAtJobLoading: false,
        isGetByKeywordWithUrgentAtJobSuccess: true,
        getByKeywordWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByKeywordWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByKeywordWithUrgentAtJobLoading: false,
        isGetByKeywordWithUrgentAtJobSuccess: false,
        getByKeywordWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByTagWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByTagWithUrgentAtJobLoading: true,
        isGetByTagWithUrgentAtJobSuccess: false,
        getByTagWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByTagWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByTagWithUrgentAtJob: action.jobs,
        isGetByTagWithUrgentAtJobLoading: false,
        isGetByTagWithUrgentAtJobSuccess: true,
        getByTagWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByTagWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByTagWithUrgentAtJobLoading: false,
        isGetByTagWithUrgentAtJobSuccess: false,
        getByTagWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByFieldWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByFieldWithUrgentAtJobLoading: true,
        isGetByFieldWithUrgentAtJobSuccess: false,
        getByFieldWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByFieldWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByFieldWithUrgentAtJob: action.jobs,
        isGetByFieldWithUrgentAtJobLoading: false,
        isGetByFieldWithUrgentAtJobSuccess: true,
        getByFieldWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByFieldWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByFieldWithUrgentAtJobLoading: false,
        isGetByFieldWithUrgentAtJobSuccess: false,
        getByFieldWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getByLocationdWithKeywordsWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetByLocationWithUrgentAtJobLoading: true,
        isGetByLocationWithUrgentAtJobSuccess: false,
        getByLocationWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByLocationdWithKeywordsWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByLocationWithUrgentAtJob: action.jobs,
        isGetByLocationWithUrgentAtJobLoading: false,
        isGetByLocationWithUrgentAtJobSuccess: true,
        getByLocationWithUrgentAtJobError: "",
    }
}),
on(JobActions.getByLocationdWithKeywordsWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetByLocationWithUrgentAtJobLoading: false,
        isGetByLocationWithUrgentAtJobSuccess: false,
        getByLocationWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getAllAndSortWithUrgentAtJob,(state,action)=>{
    return{
        ...state,
        isGetAllAndSortWithUrgentAtJobLoading: true,
        isGetAllAndSortWithUrgentAtJobSuccess: false,
        getAllAndSortWithUrgentAtJobError: "",
    }
}),
on(JobActions.getAllAndSortWithUrgentAtJobSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByAllAndSortWithUrgentAtJob: action.jobs,
        isGetAllAndSortWithUrgentAtJobLoading: false,
        isGetAllAndSortWithUrgentAtJobSuccess: true,
        getAllAndSortWithUrgentAtJobError: "",
    }
}),
on(JobActions.getAllAndSortWithUrgentAtJobFailure,(state,action)=>{
    return{
        ...state,
        isGetAllAndSortWithUrgentAtJobLoading: false,
        isGetAllAndSortWithUrgentAtJobSuccess: false,
        getAllAndSortWithUrgentAtJobError: action.error,
    }
}),



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(JobActions.getAllAndSortByWelfareAndSalaryAtHome,(state,action)=>{
    return{
        ...state,
        isGetAllAndSortByWelfareAndSalaryAtHomeLoading: true,
        isGetAllAndSortByWelfareAndSalaryAtHomeSuccess: false,
        getAllAndSortByWelfareAndSalaryAtHomeError: "",
    }
}),
on(JobActions.getAllAndSortByWelfareAndSalaryAtHomeSuccess,(state,action)=>{
    return{
        ...state,
        jobsTakenByAllAndSortByWelfareAndSalaryAtHome: action.jobs,
        isGetAllAndSortByWelfareAndSalaryAtHomeLoading: false,
        isGetAllAndSortByWelfareAndSalaryAtHomeSuccess: true,
        getAllAndSortByWelfareAndSalaryAtHomeError: "",
    }
}),
on(JobActions.getAllAndSortByWelfareAndSalaryAtHomeFailure,(state,action)=>{
    return{
        ...state,
        isGetAllAndSortByWelfareAndSalaryAtHomeLoading: false,
        isGetAllAndSortByWelfareAndSalaryAtHomeSuccess: false,
        getAllAndSortByWelfareAndSalaryAtHomeError: action.error,
    }
}),


)
