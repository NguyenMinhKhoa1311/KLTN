import { Admin } from "../../models/admin.model";

export interface AdminState {
    isCreateAtRegisterLoading: boolean;
    isCreateAtRegisterSuccess: boolean;
    createAtRegisterError: string;
    admincreatedAtRegister: Admin;

    isGetBy_idAtRegisterLoading: boolean;
    isGetBy_idAtRegisterSuccess: boolean;
    getBy_idAtRegisterError: string;
    adminGetBy_idAtRegister: Admin;

    isGetByUserAtLoginLoading: boolean;
    isGetByUserAtLoginSuccess: boolean;
    getByUserAtLoginError: string;
    adminGetByUserAtLogin: Admin;

    isGetByUserAtRegisterLoading: boolean;
    isGetByUserAtRegisterSuccess: boolean;
    getByUserAtRegisterError: string;
    adminGetByUserAtRegister: Admin;

    isLoginAtLogin: boolean;
    
}