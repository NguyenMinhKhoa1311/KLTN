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
);