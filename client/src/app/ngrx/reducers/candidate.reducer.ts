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
    on(CandidateActions.resetState,(state) => {
        console.log('reset state', initialState);
        return initialState;
    }),
);