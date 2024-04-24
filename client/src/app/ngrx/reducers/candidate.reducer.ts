import { createReducer, on } from "@ngrx/store";
import { Candidate } from "../../models/candidate.model";
import { candidateState } from "../states/candidate.state";
import * as CandidateActions from "../actions/candidate.actions";

export const initialState: candidateState = {

    isGetByUserWithGoogleAtLoginLoading: false,
    isGetByUserWithGoogleAtLoginSuccess: false,
    getByUserWithGoogleAtLoginError: "",
    candidateTakenByUserWithGoogleAtLogin: <Candidate>{},

    isCreateCandidateAtCreateProfileLoading: false,
    isCreateCandidateAtCreateProfileSuccess: false,
    createCandidateAtCreateProfileError: "",
    candidateCreatedAtCreateProfile: <Candidate>{},

    isGetByUserWithGoogleAtRegisterLoading: false,
    isGetByUserWithGoogleAtRegisterSuccess: false,
    getByUserWithGoogleAtRegisterError: "",
    candidateTakenByUserWithGoogleAtRegister: <Candidate>{},

    isUpdateEducationAtProfileLoading: false,
    isUpdateEducationAtProfileSuccess: false,
    updateEducationAtProfileError: "",
    candidateUpdatedEducationAtProfile: <Candidate>{},

    isUpdateWorkExperienceAtProfileLoading: false,
    isUpdateWorkExperienceAtProfileSuccess: false,
    updateWorkExperienceAtProfileError: "",
    candidateUpdatedWorkExperienceAtProfile: <Candidate>{},

    isUpdateLanguageAtProfileLoading: false,
    isUpdateLanguageAtProfileSuccess: false,
    updateLanguageAtProfileError: "",
    candidateUpdatedLanguageAtProfile: <Candidate>{},

    isUpdateDesiredJobAtProfileLoading: false,
    isUpdateDesiredJobAtProfileSuccess: false,
    updateDesiredJobAtProfileError: "",
    candidateUpdatedDesiredJobAtProfile: <Candidate>{},

    isUpdateSkillAtProfileLoading: false,
    isUpdateSkillAtProfileSuccess: false,
    updateSkillAtProfileError: "",
    candidateUpdatedSkillAtProfile: <Candidate>{},

    isUpdateAvatarAtProfileLoading: false,
    isUpdateAvatarAtProfileSuccess: false,
    updateAvatarAtProfileError: "",
    candidateUpdatedAvatarAtProfile: <Candidate>{},

    isUpdateBasicInfoAtProfileLoading:  false,
    isUpdateBasicInfoAtProfileSuccess:  false,
    updateBasicInfoAtProfileError:  "",
    candidateUpdatedBasicInfoAtProfile: <Candidate>{},


    isDeleteEducationAtProfileLoading: false,
    isDeleteEducationAtProfileSuccess: false,
    deleteEducationAtProfileError: "",
    candidateDeletedEducationAtProfile: <Candidate>{},

    isDeleteWorkExperienceAtProfileLoading: false,
    isDeleteWorkExperienceAtProfileSuccess: false,
    deleteWorkExperienceAtProfileError: "",
    candidateDeletedWorkExperienceAtProfile: <Candidate>{},

    isDeleteLanguageAtProfileLoading: false,
    isDeleteLanguageAtProfileSuccess: false,
    deleteLanguageAtProfileError: "",
    candidateDeletedLanguageAtProfile: <Candidate>{},

    isDeleteSkillAtProfileLoading: false,
    isDeleteSkillAtProfileSuccess: false,
    deleteSkillAtProfileError: "",
    candidateDeletedSkillAtProfile: <Candidate>{},

    isUpdateOneOfEducationAtProfileLoading: false,
    isUpdateOneOfEducationAtProfileSuccess: false,
    updateOneOfEducationAtProfileError: "",
    candidateUpdatedOneOfEducationAtProfile: <Candidate>{},

    isUpdateOneOfWorkExperienceAtProfileLoading: false,
    isUpdateOneOfWorkExperienceAtProfileSuccess: false,
    updateOneOfWorkExperienceAtProfileError: "",
    candidateUpdatedOneOfWorkExperienceAtProfile: <Candidate>{},

    isUpdateReferenceAtProfileLoading: false,
    isUpdateReferenceAtProfileSuccess: false,
    updateReferenceAtProfileError: "",
    candidateUpdatedReferenceAtProfile: <Candidate>{},

    isUpdateOneOfSkillAtProfileLoading:  false,
    isUpdateOneOfSkillAtProfileSuccess:  false,
    updateOneOfSkillAtProfileError:  "",
    candidateUpdatedOneOfSkillAtProfile: <Candidate>{},

    isUpdateCareerGoalAtProfileLoading: false,
    isUpdateCareerGoalAtProfileSuccess: false,
    updateCareerGoalAtProfileError: "",
    candidateUpdatedCareerGoalAtProfile: <Candidate>{},

    isUpdateOneOfReferenceAtProfileLoading: false,
    isUpdateOneOfReferenceAtProfileSuccess: false,
    updateOneOfReferenceAtProfileError: "",
    candidateUpdatedOneOfReferenceAtProfile: <Candidate>{},

    isDeleteReferenceAtProfileLoading: false,
    isDeleteReferenceAtProfileSuccess: false,
    deleteReferenceAtProfileError: "",
    candidateDeletedReferenceAtProfile: <Candidate>{},

    isGetByIdAtAplicationListLoading: false,
    isGetByIdAtAplicationListSuccess: false,
    getByIdAtAplicationListError: "",
    candidateTakenByIdAtAplicationList: <Candidate>{},

    isUpdateFavoriteJobAtJobLoading: false,
    isUpdateFavoriteJobAtJobSuccess: false,
    updateFavoriteJobAtJobError: "",
    candidateUpdatedFavoriteJobAtJob: <Candidate>{},

    isDeleteFavoriteJobAtJobLoading: false,
    isDeleteFavoriteJobAtJobSuccess: false,
    deleteFavoriteJobAtJobError: "",
    candidateDeletedFavoriteJobAtJob: <Candidate>{},



};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const candidateReducer = createReducer(
    initialState,
    on(CandidateActions.getByUserWithGoogleAtLogin,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtLoginLoading: true,
            isGetByUserWithGoogleAtLoginSuccess: false,
            getByUserWithGoogleAtLoginError: "",
        };
    }),
    on(CandidateActions.getByUserWithGoogleAtLoginSuccess,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtLoginLoading: false,
            isGetByUserWithGoogleAtLoginSuccess: true,
            getByUserWithGoogleAtLoginError: "",
            candidateTakenByUserWithGoogleAtLogin: actions.candidate,
        };
    }),
    on(CandidateActions.getByUserWithGoogleAtLoginFailure,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtLoginLoading: false,
            isGetByUserWithGoogleAtLoginSuccess: false,
            getByUserWithGoogleAtLoginError: actions.error,
        };
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.createCandidateAtCreateProfile,(state, actions)=>{
        console.log(actions.candidate);
        
        return{
            ...state,
            isCreateCandidateAtCreateProfileLoading: true,
            isCreateCandidateAtCreateProfileSuccess: false,
            createCandidateAtCreateProfileError: "",
            

        };
    }),
    on(CandidateActions.createCandidateAtCreateProfileSuccess,(state, actions)=>{
        console.log(actions.type);
        
        return{
            ...state,
            candidateCreatedAtCreateProfile: actions.candidate,
            isCreateCandidateAtCreateProfileLoading: false,
            isCreateCandidateAtCreateProfileSuccess: true,
            createCandidateAtCreateProfileError: "",
        };
    }),
    on(CandidateActions.createCandidateAtCreateProfileFailure,(state, actions)=>{
        console.log(actions.error);
        
        return{
            ...state,
            isCreateCandidateAtCreateProfileLoading: false,
            isCreateCandidateAtCreateProfileSuccess: false,
            createCandidateAtCreateProfileError: actions.error,
        };
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.getByUserWithGoogleAtRegister,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtRegisterLoading: true,
            isGetByUserWithGoogleAtRegisterSuccess: false,
            getByUserWithGoogleAtRegisterError: "",
        };
    }),
    on(CandidateActions.getByUserWithGoogleAtRegisterSuccess,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtRegisterLoading: false,
            isGetByUserWithGoogleAtRegisterSuccess: true,
            getByUserWithGoogleAtRegisterError: "",
            candidateTakenByUserWithGoogleAtRegister: actions.candidate,
        };
    }),
    on(CandidateActions.getByUserWithGoogleAtRegisterFailure,(state, actions)=>{
        return{
            ...state,
            isGetByUserWithGoogleAtRegisterLoading: false,
            isGetByUserWithGoogleAtRegisterSuccess: false,
            getByUserWithGoogleAtRegisterError: actions.error,
        };
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.updateWorkExperienceAtProfile,(state, actions)=>{
        return{
            ...state,
            isUpdateWorkExperienceAtProfileLoading: true,
            isUpdateWorkExperienceAtProfileSuccess: false,
            updateWorkExperienceAtProfileError: "",
        };
    }),
    on(CandidateActions.updateWorkExperienceAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isUpdateWorkExperienceAtProfileLoading: false,
            isUpdateWorkExperienceAtProfileSuccess: true,
            updateWorkExperienceAtProfileError: "",
            candidateUpdatedWorkExperienceAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.updateWorkExperienceAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isUpdateWorkExperienceAtProfileLoading: false,
            isUpdateWorkExperienceAtProfileSuccess: false,
            updateWorkExperienceAtProfileError: actions.error,
        };
    }),






    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateLanguageAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateLanguageAtProfileLoading: true,
        isUpdateLanguageAtProfileSuccess: false,
        updateLanguageAtProfileError: "",
    };
}),
on(CandidateActions.updateLanguageAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateLanguageAtProfileLoading: false,
        isUpdateLanguageAtProfileSuccess: true,
        updateLanguageAtProfileError: "",
        candidateUpdatedLanguageAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateLanguageAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateLanguageAtProfileLoading: false,
        isUpdateLanguageAtProfileSuccess: false,
        updateLanguageAtProfileError: actions.error,
    };
}),





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateDesiredJobAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateDesiredJobAtProfileLoading: true,
        isUpdateDesiredJobAtProfileSuccess: false,
        updateDesiredJobAtProfileError: "",
    };
}),
on(CandidateActions.updateDesiredJobAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateDesiredJobAtProfileLoading: false,
        isUpdateDesiredJobAtProfileSuccess: true,
        updateDesiredJobAtProfileError: "",
        candidateUpdatedDesiredJobAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateDesiredJobAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateDesiredJobAtProfileLoading: false,
        isUpdateDesiredJobAtProfileSuccess: false,
        updateDesiredJobAtProfileError: actions.error,
    };
}),






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.updateEducationAtProfile,(state, actions)=>{
        return{
            ...state,
            isUpdateEducationAtProfileLoading: true,
            isUpdateEducationAtProfileSuccess: false,
            updateEducationAtProfileError: "",
        };
    }),
    on(CandidateActions.updateEducationAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isUpdateEducationAtProfileLoading: false,
            isUpdateEducationAtProfileSuccess: true,
            updateEducationAtProfileError: "",
            candidateUpdatedEducationAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.updateEducationAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isUpdateEducationAtProfileLoading: false,
            isUpdateEducationAtProfileSuccess: false,
            updateEducationAtProfileError: actions.error,
        };
    }),






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.updateSkillAtProfile,(state, actions)=>{
        return{
            ...state,
            isUpdateSkillAtProfileLoading: true,
            isUpdateSkillAtProfileSuccess: false,
            updateSkillAtProfileError: "",
        };
    }),
    on(CandidateActions.updateSkillAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isUpdateSkillAtProfileLoading: false,
            isUpdateSkillAtProfileSuccess: true,
            updateSkillAtProfileError: "",
            candidateUpdatedSkillAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.updateSkillAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isUpdateSkillAtProfileLoading: false,
            isUpdateSkillAtProfileSuccess: false,
            updateSkillAtProfileError: actions.error,
        };
    }),





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.updateAvatarAtProfile,(state, actions)=>{
        return{
            ...state,
            isUpdateAvatarAtProfileLoading: true,
            isUpdateAvatarAtProfileSuccess: false,
            updateAvatarAtProfileError: "",
        };
    }),
    on(CandidateActions.updateAvatarAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isUpdateAvatarAtProfileLoading: false,
            isUpdateAvatarAtProfileSuccess: true,
            updateAvatarAtProfileError: "",
            candidateUpdatedAvatarAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.updateAvatarAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isUpdateAvatarAtProfileLoading: false,
            isUpdateAvatarAtProfileSuccess: false,
            updateAvatarAtProfileError: actions.error,
        };
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateBasicInfoAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateBasicInfoAtProfileLoading: true,
        isUpdateBasicInfoAtProfileSuccess: false,
        updateBasicInfoAtProfileError: "",
    };
}),
on(CandidateActions.updateBasicInfoAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateBasicInfoAtProfileLoading: false,
        isUpdateBasicInfoAtProfileSuccess: true,
        updateBasicInfoAtProfileError: "",
        candidateUpdatedBasicInfoAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateBasicInfoAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateBasicInfoAtProfileLoading: false,
        isUpdateBasicInfoAtProfileSuccess: false,
        updateBasicInfoAtProfileError: actions.error,
    };
}),





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateOneOfEducationAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfEducationAtProfileLoading: true,
        isUpdateOneOfEducationAtProfileSuccess: false,
        updateOneOfEducationAtProfileError: "",
    };
}),
on(CandidateActions.updateOneOfEducationAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfEducationAtProfileLoading: false,
        isUpdateOneOfEducationAtProfileSuccess: true,
        updateOneOfEducationAtProfileError: "",
        candidateUpdatedOneOfEducationAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateOneOfEducationAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfEducationAtProfileLoading: false,
        isUpdateOneOfEducationAtProfileSuccess: false,
        updateOneOfEducationAtProfileError: actions.error,
    };
}),






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateOneOfWorkExperienceAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfWorkExperienceAtProfileLoading: true,
        isUpdateOneOfWorkExperienceAtProfileSuccess: false,
        updateOneOfWorkExperienceAtProfileError: "",
    };
}),
on(CandidateActions.updateOneOfWorkExperienceAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfWorkExperienceAtProfileLoading: false,
        isUpdateOneOfWorkExperienceAtProfileSuccess: true,
        updateOneOfWorkExperienceAtProfileError: "",
        candidateUpdatedOneOfWorkExperienceAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateOneOfWorkExperienceAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfWorkExperienceAtProfileLoading: false,
        isUpdateOneOfWorkExperienceAtProfileSuccess: false,
        updateOneOfWorkExperienceAtProfileError: actions.error,
    };
}),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateReferenceAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateReferenceAtProfileLoading: true,
        isUpdateReferenceAtProfileSuccess: false,
        updateReferenceAtProfileError: "",
    };
}),
on(CandidateActions.updateReferenceAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateReferenceAtProfileLoading: false,
        isUpdateReferenceAtProfileSuccess: true,
        updateReferenceAtProfileError: "",
        candidateUpdatedReferenceAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateReferenceAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateReferenceAtProfileLoading: false,
        isUpdateReferenceAtProfileSuccess: false,
        updateReferenceAtProfileError: actions.error,
    };
}),






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateOneOfSkillAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfSkillAtProfileLoading: true,
        isUpdateOneOfSkillAtProfileSuccess: false,
        updateOneOfSkillAtProfileError: "",
    };
}),
on(CandidateActions.updateOneOfSkillAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfSkillAtProfileLoading: false,
        isUpdateOneOfSkillAtProfileSuccess: true,
        updateOneOfSkillAtProfileError: "",
        candidateUpdatedOneOfSkillAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateOneOfSkillAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfSkillAtProfileLoading: false,
        isUpdateOneOfSkillAtProfileSuccess: false,
        updateOneOfSkillAtProfileError: actions.error,
    };
}),







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateCareerGoalAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateCareerGoalAtProfileLoading: true,
        isUpdateCareerGoalAtProfileSuccess: false,
        updateCareerGoalAtProfileError: "",
    };
}),
on(CandidateActions.updateCareerGoalAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateCareerGoalAtProfileLoading: false,
        isUpdateCareerGoalAtProfileSuccess: true,
        updateCareerGoalAtProfileError: "",
        candidateUpdatedCareerGoalAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateCareerGoalAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateCareerGoalAtProfileLoading: false,
        isUpdateCareerGoalAtProfileSuccess: false,
        updateCareerGoalAtProfileError: actions.error,
    };
}),







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.updateOneOfReferenceAtProfile,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfReferenceAtProfileLoading: true,
        isUpdateOneOfReferenceAtProfileSuccess: false,
        updateOneOfReferenceAtProfileError: "",
    };
}),
on(CandidateActions.updateOneOfReferenceAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfReferenceAtProfileLoading: false,
        isUpdateOneOfReferenceAtProfileSuccess: true,
        updateOneOfReferenceAtProfileError: "",
        candidateUpdatedOneOfReferenceAtProfile: actions.candidate,
    };
}),
on(CandidateActions.updateOneOfReferenceAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isUpdateOneOfReferenceAtProfileLoading: false,
        isUpdateOneOfReferenceAtProfileSuccess: false,
        updateOneOfReferenceAtProfileError: actions.error,
    };
}),








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.deleteReferenceAtProfile,(state, actions)=>{
    return{
        ...state,
        isDeleteReferenceAtProfileLoading: true,
        isDeleteReferenceAtProfileSuccess: false,
        deleteReferenceAtProfileError: "",
    };
}),
on(CandidateActions.deleteReferenceAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isDeleteReferenceAtProfileLoading: false,
        isDeleteReferenceAtProfileSuccess: true,
        deleteReferenceAtProfileError: "",
        candidateDeletedReferenceAtProfile: actions.candidate,
    };
}),
on(CandidateActions.deleteReferenceAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isDeleteReferenceAtProfileLoading: false,
        isDeleteReferenceAtProfileSuccess: false,
        deleteReferenceAtProfileError: actions.error,
    };
}),








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.deleteEducationAtProfile,(state, actions)=>{
    return{
        ...state,
        isDeleteEducationAtProfileLoading: true,
        isDeleteEducationAtProfileSuccess: false,
        deleteEducationAtProfileError: "",
    };
}),
on(CandidateActions.deleteEducationAtProfileSuccess,(state, actions)=>{
    return{
        ...state,
        isDeleteEducationAtProfileLoading: false,
        isDeleteEducationAtProfileSuccess: true,
        deleteEducationAtProfileError: "",
        candidateDeletedEducationAtProfile: actions.candidate,
    };
}),
on(CandidateActions.deleteEducationAtProfileFailure,(state, actions)=>{
    return{
        ...state,
        isDeleteEducationAtProfileLoading: false,
        isDeleteEducationAtProfileSuccess: false,
        deleteEducationAtProfileError: actions.error,
    };
}),






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.deleteWorkExperienceAtProfile,(state, actions)=>{
        return{
            ...state,
            isDeleteWorkExperienceAtProfileLoading: true,
            isDeleteWorkExperienceAtProfileSuccess: false,
            deleteWorkExperienceAtProfileError: "",
        };
    }),
    on(CandidateActions.deleteWorkExperienceAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isDeleteWorkExperienceAtProfileLoading: false,
            isDeleteWorkExperienceAtProfileSuccess: true,
            deleteWorkExperienceAtProfileError: "",
            candidateDeletedWorkExperienceAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.deleteWorkExperienceAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isDeleteWorkExperienceAtProfileLoading: false,
            isDeleteWorkExperienceAtProfileSuccess: false,
            deleteWorkExperienceAtProfileError: actions.error,
        };
    }),








    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.deleteLanguageAtProfile,(state, actions)=>{
        return{
            ...state,
            isDeleteLanguageAtProfileLoading: true,
            isDeleteLanguageAtProfileSuccess: false,
            deleteLanguageAtProfileError: "",
        };
    }),
    on(CandidateActions.deleteLanguageAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isDeleteLanguageAtProfileLoading: false,
            isDeleteLanguageAtProfileSuccess: true,
            deleteLanguageAtProfileError: "",
            candidateDeletedLanguageAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.deleteLanguageAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isDeleteLanguageAtProfileLoading: false,
            isDeleteLanguageAtProfileSuccess: false,
            deleteLanguageAtProfileError: actions.error,
        };
    }),





    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.updateFavoriteJobsAtJob,(state, actions)=>{
        return{
            ...state,
            isUpdateFavoriteJobAtJobLoading: true,
            isUpdateFavoriteJobAtJobSuccess: false,
            updateFavoriteJobAtJobError: "",
        };
    }),
    on(CandidateActions.updateFavoriteJobsAtJobSuccess,(state, actions)=>{
        return{
            ...state,
            isUpdateFavoriteJobAtJobLoading: false,
            isUpdateFavoriteJobAtJobSuccess: true,
            updateFavoriteJobAtJobError: "",
            candidateUpdatedFavoriteJobAtJob: actions.candidate,
        };
    }),
    on(CandidateActions.updateFavoriteJobsAtJobFailure,(state, actions)=>{
        return{
            ...state,
            isUpdateFavoriteJobAtJobLoading: false,
            isUpdateFavoriteJobAtJobSuccess: false,
            updateFavoriteJobAtJobError: actions.error,
        };
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.deleteFavoriteJobAtJob,(state, actions)=>{
        return{
            ...state,
            isDeleteFavoriteJobAtJobLoading: true,
            isDeleteFavoriteJobAtJobSuccess: false,
            deleteFavoriteJobAtJobError: "",
        };
    }),
    on(CandidateActions.deleteFavoriteJobAtJobSuccess,(state, actions)=>{
        return{
            ...state,
            isDeleteFavoriteJobAtJobLoading: false,
            isDeleteFavoriteJobAtJobSuccess: true,
            deleteFavoriteJobAtJobError: "",
            candidateDeletedFavoriteJobAtJob: actions.candidate,
        };
    }),
    on(CandidateActions.deleteFavoriteJobAtJobFailure,(state, actions)=>{
        return{
            ...state,
            isDeleteFavoriteJobAtJobLoading: false,
            isDeleteFavoriteJobAtJobSuccess: false,
            deleteFavoriteJobAtJobError: actions.error,
        };
    }),








    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.deleteSkillAtProfile,(state, actions)=>{
        return{
            ...state,
            isDeleteSkillAtProfileLoading: true,
            isDeleteSkillAtProfileSuccess: false,
            deleteSkillAtProfileError: "",
        };
    }),
    on(CandidateActions.deleteSkillAtProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isDeleteSkillAtProfileLoading: false,
            isDeleteSkillAtProfileSuccess: true,
            deleteSkillAtProfileError: "",
            candidateDeletedSkillAtProfile: actions.candidate,
        };
    }),
    on(CandidateActions.deleteSkillAtProfileFailure,(state, actions)=>{
        return{
            ...state,
            isDeleteSkillAtProfileLoading: false,
            isDeleteSkillAtProfileSuccess: false,
            deleteSkillAtProfileError: actions.error,
        };
    }),


    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
on(CandidateActions.getByIdAtAplicationList,(state, actions)=>{
    return{
        ...state,
        isGetByIdAtAplicationListLoading: true,
        isGetByIdAtAplicationListSuccess: false,
        getByIdAtAplicationListError: "",
    };
}),
on(CandidateActions.getByIdAtAplicationListSuccess,(state, actions)=>{
    return{
        ...state,
        isGetByIdAtAplicationListLoading: false,
        isGetByIdAtAplicationListSuccess: true,
        getByIdAtAplicationListError: "",
        candidateTakenByIdAtAplicationList: actions.candidate,
    };
}),
on(CandidateActions.getByIdAtAplicationListFailure,(state, actions)=>{
    return{
        ...state,
        isGetByIdAtAplicationListLoading: false,
        isGetByIdAtAplicationListSuccess: false,
        getByIdAtAplicationListError: actions.error,
    };
}),


    




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CandidateActions.resetState,(state) => {
        console.log('reset state', initialState);
        return initialState;
    }),
);