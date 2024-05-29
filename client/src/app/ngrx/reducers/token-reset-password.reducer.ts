import { TokenResetPassword } from "../../models/token-reset-password";
import { TokenResetPasswordState } from "../states/token-reset-password.state";
import * as TokenResetPasswordActions from '../actions/token-reset-password.actions';
import { createReducer, on } from "@ngrx/store";


export const initialState: TokenResetPasswordState = {
    isCreateAtForgotPasswordOfCandidateLoading: false,
    isCreateAtForgotPasswordOfCandidateSuccess: false,
    createAtForgotPasswordOfCandidateError: '',
    tokenAtForgotPasswordOfCandidate: <TokenResetPassword>{},

    isCreateAtForgotPasswordOfRecruiterLoading: false,
    isCreateAtForgotPasswordOfRecruiterSuccess: false,
    createAtForgotPasswordOfRecruiterError: '',
    tokenAtForgotPasswordOfRecruiter: <TokenResetPassword>{},
};

export const tokenResetPasswordReducer = createReducer(
    initialState,
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidate, (state,action) => {
        console.log(action.type);
        return{
        ...state,
        isCreateAtForgotPasswordOfCandidateLoading: true,
        isCreateAtForgotPasswordOfCandidateSuccess: false,
        createAtForgotPasswordOfCandidateError: ''
    }
    }),
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidateSuccess, (state,action) => {
        console.log(action.type);
        
        return{
        ...state,
        tokenAtForgotPasswordOfCandidate: action.token,
        isCreateAtForgotPasswordOfCandidateLoading: false,
        isCreateAtForgotPasswordOfCandidateSuccess: true,
        createAtForgotPasswordOfCandidateError: ''
    }
    }),
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfCandidateFailure, (state,action) => {
        return{
        ...state,
        isCreateAtForgotPasswordOfCandidateLoading: false,
        isCreateAtForgotPasswordOfCandidateSuccess: false,
        createAtForgotPasswordOfCandidateError: action.error
    }
    }),



    ///----------------------------------------------------------------------------------------------------------------
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiter, (state,action) => ({
        ...state,
        isCreateAtForgotPasswordOfRecruiterLoading: true,
        isCreateAtForgotPasswordOfRecruiterSuccess: false,
        createAtForgotPasswordOfRecruiterError: ''
    })),
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiterSuccess, (state,action) => ({
        ...state,
        tokenAtForgotPasswordOfRecruiter: action.token,
        isCreateAtForgotPasswordOfRecruiterLoading: false,
        isCreateAtForgotPasswordOfRecruiterSuccess: true,
        createAtForgotPasswordOfRecruiterError: ''
    })),
    on(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiterFailure, (state,action) => ({
        ...state,
        isCreateAtForgotPasswordOfRecruiterLoading: false,
        isCreateAtForgotPasswordOfRecruiterSuccess: false,
        createAtForgotPasswordOfRecruiterError: action.error
    }))

)
