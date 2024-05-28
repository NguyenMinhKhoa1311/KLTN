import { TokenResetPassword } from "../../models/token-reset-password";

export interface TokenResetPasswordState{
    isCreateAtForgotPasswordOfCandidateLoading: boolean;
    isCreateAtForgotPasswordOfCandidateSuccess: boolean;
    createAtForgotPasswordOfCandidateError: string;
    tokenAtForgotPasswordOfCandidate: TokenResetPassword;

    isCreateAtForgotPasswordOfRecruiterLoading: boolean;
    isCreateAtForgotPasswordOfRecruiterSuccess: boolean;
    createAtForgotPasswordOfRecruiterError: string;
    tokenAtForgotPasswordOfRecruiter: TokenResetPassword;
}