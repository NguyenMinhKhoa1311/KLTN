
import { UserFirebase } from "../../models/userFirebase.model";


export interface AuthState {
  user: UserFirebase;
  
  isLoginLoading: boolean;
  isLoginSuccessfull: boolean;
  loginErrorMessage: string;

  isLogoutLoading: boolean;
  isLogoutSuccessfull: boolean;
  logoutErrorMessage: string;

  isLoginAtRegisterLoading: boolean;
  isLoginAtRegisterSuccessfull: boolean;
  loginAtRegisterErrorMessage: string;
  userAtregister: UserFirebase;

  isLoginOfRecruiterAtLoginLoading: boolean;
  isLoginOfRecruiterAtLoginSuccessfull: boolean;
  loginOfRecruiterAtLoginErrorMessage: string;
  userOfRecruiterAtLogin: UserFirebase;

  isLoginOfRecruiterAtRegisterLoading: boolean;
  isLoginOfRecruiterAtRegisterSuccessfull: boolean;
  loginOfRecruiterAtRegisterErrorMessage: string;
  userOfRecruiterAtRegister: UserFirebase;

  isGetTokenAtLoginOfCandidateLoading: boolean,
  isGetTokenAtLoginOfCandidateSuccessfull: boolean,
  getTokenAtLoginOfCandidateErrorMessage: string,
  tokenAtLoginOfCandidate: any,

  isGetTokenAtLoginOfRecruiterLoading: boolean,
  isGetTokenAtLoginOfRecruiterSuccessfull: boolean,
  getTokenAtLoginOfRecruiterErrorMessage: string,
  tokenAtLoginOfRecruiter: any,

  isGetTokenAtRegisterOfRecruiterLoading: boolean,
  isGetTokenAtRegisterOfRecruiterSuccessfull: boolean,
  getTokenAtRegisterOfRecruiterErrorMessage: string,
  tokenAtRegisterOfRecruiter: any,

  isGetTokenAtRegisterOfCandidateLoading: boolean,
  isGetTokenAtRegisterOfCandidateSuccessfull: boolean,
  getTokenAtRegisterOfCandidateErrorMessage: string,
  tokenAtRegisterOfCandidate: any,

  isGetTokenAtUserManagementOfCandidateLoading: boolean,
  isGetTokenAtUserManagementOfCandidateSuccessfull: boolean,
  getTokenAtUserManagementOfCandidateErrorMessage: string,
  tokenAtUserManagementOfCandidate: any,

  isGetTokenAtUserManagementOfRecruiterLoading: boolean,
  isGetTokenAtUserManagementOfRecruiterSuccessfull: boolean,
  getTokenAtUserManagementOfRecruiterErrorMessage: string,
  tokenAtUserManagementOfRecruiter: any,

  isGetTokenAtUserManagementOfAdminLoading: boolean,
  isGetTokenAtUserManagementOfAdminSuccessfull: boolean,
  getTokenAtUserManagementOfAdminErrorMessage: string,
  tokenAtUserManagementOfAdmin: any,

  isGetTokenAtRegisterOfAdminLoading: boolean,
  isGetTokenAtRegisterOfAdminSuccessfull: boolean,
  getTokenAtRegisterOfAdminErrorMessage: string,
  tokenAtRegisterOfAdmin: any,

  isLoginAtRegisterOfAdminLoading: boolean,
  isLoginAtRegisterOfAdminSuccessfull: boolean,
  loginAtRegisterOfAdminErrorMessage: string,
  userAtregisterOfAdmin: UserFirebase,

}