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

    isGetByUserWithGoogleAtRegisterLoading: false,
    isGetByUserWithGoogleAtRegisterSuccess: false,
    getByUserWithGoogleAtRegisterError: "",
    candidateTakenByUserWithGoogleAtRegister: <Candidate>{},
};


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
);