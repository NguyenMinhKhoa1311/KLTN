import { createAction, props } from "@ngrx/store";
import { TokenResetPassword } from "../../models/token-reset-password";

export const createTokenAtForgotPasswordOfCandidate = createAction(
    'createTokenAtForgotPasswordOfCandidate',
    props<{tokenResetPassword: any}>()
)
export const createTokenAtForgotPasswordOfCandidateSuccess = createAction(
    'createTokenAtForgotPasswordOfCandidateSuccess',
    props<{token: TokenResetPassword}>()
)
export const createTokenAtForgotPasswordOfCandidateFailure = createAction(
    'createTokenAtForgotPasswordOfCandidateFailure',
    props<{error: string}>()
)

export const createTokenAtForgotPasswordOfRecruiter = createAction(
    'createTokenAtForgotPasswordOfRecruiter',
    props<{tokenResetPassword: any}>()
)
export const createTokenAtForgotPasswordOfRecruiterSuccess = createAction(
    'createTokenAtForgotPasswordOfRecruiterSuccess',
    props<{token: TokenResetPassword}>()
)
export const createTokenAtForgotPasswordOfRecruiterFailure = createAction(
    'createTokenAtForgotPasswordOfRecruiterFailure',
    props<{error: string}>()
)