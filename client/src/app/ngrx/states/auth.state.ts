
import { UserFirebase } from "../../models/userFirebase.model";


export interface AuthState {
  user: UserFirebase;
  
  isLoginLoading: boolean;
  isLoginSuccessfull: boolean;
  loginErrorMessage: string;

  isLogoutLoading: boolean;
  isLogoutSuccessfull: boolean;
  logoutErrorMessage: string;
}