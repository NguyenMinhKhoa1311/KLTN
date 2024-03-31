import { createReducer, on } from "@ngrx/store";
import { Candidate } from "../../models/candidate.model";
import { candidateState } from "../states/candidate.state";
import * as CandidateActions from "../actions/candidate.actions";

export const initialState: candidateState = {
    isCreateCandidateWithGoogleAtLoginLoading: false,
    isCreateCandidateWithGoogleAtLoginSuccess: false,
    createCandidateWithGoogleAtLoginError: "",

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
    on(CandidateActions.createCandidateWithGoogleAtLogin,(state, actions)=>{
        return{
            ...state,
            isCreateCandidateWithGoogleAtLoginLoading: true,
            isCreateCandidateWithGoogleAtLoginSuccess: false,
            createCandidateWithGoogleAtLoginError: "",
        };
    }),
    on(CandidateActions.createCandidateWithGoogleAtLoginSuccess,(state, actions)=>{
        return{
            ...state,
            isCreateCandidateWithGoogleAtLoginLoading: false,
            isCreateCandidateWithGoogleAtLoginSuccess: true,
            createCandidateWithGoogleAtLoginError: "",
        };
    }),
    on(CandidateActions.createCandidateWithGoogleAtLoginFailure,(state, actions)=>{
        return{
            ...state,
            isCreateCandidateWithGoogleAtLoginLoading: false,
            isCreateCandidateWithGoogleAtLoginSuccess: false,
            createCandidateWithGoogleAtLoginError: actions.error,
        };
    }),
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
        return{
            ...state,
            isCreateCandidateAtRegisterLoading: true,
            isCreateCandidateAtRegisterSuccess: false,
            createCandidateAtRegisterError: "",
        };
    }),
    on(CandidateActions.createCandidateAtCreateProfileSuccess,(state, actions)=>{
        return{
            ...state,
            isCreateCandidateAtRegisterLoading: false,
            isCreateCandidateAtRegisterSuccess: true,
            createCandidateAtRegisterError: "",
        };
    }),
    on(CandidateActions.createCandidateAtCreateProfileFailure,(state, actions)=>{
        return{
            ...state,
            isCreateCandidateAtRegisterLoading: false,
            isCreateCandidateAtRegisterSuccess: false,
            createCandidateAtRegisterError: actions.error,
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