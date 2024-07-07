import { createAction, props } from "@ngrx/store";
import { Admin } from "../../models/admin.model";

export const createAtRegister = createAction(
    '[Admin] create at register',
    props<{ admin: any }>()
);
export const createAtRegisterSuccess = createAction(
    '[Admin] create at register success',
    props<{ admin: Admin }>()
);
export const createAtRegisterFailure = createAction(
    '[Admin] create at register failure',
    props<{ errorMessage: string }>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getBy_idAtRegister = createAction(
    '[Admin] get by_id at register',
    props<{ id: string }>()
);
export const getBy_idAtRegisterSuccess = createAction(
    '[Admin] get by_id at register success',
    props<{ admin: Admin }>()
);
export const getBy_idAtRegisterFailure = createAction(
    '[Admin] get by_id at register failure',
    props<{ errorMessage: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUserAtRegister = createAction(
    '[Admin] get by user at register',
    props<{ user: string }>()
);
export const getByUserAtRegisterSuccess = createAction(
    '[Admin] get by user at register success',
    props<{ admin: Admin }>()
);
export const getByUserAtRegisterFailure = createAction(
    '[Admin] get by user at register failure',
    props<{ errorMessage: string }>()
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUserAtLogin = createAction(
    '[Admin] get by user at login',
    props<{ user: string }>()
);
export const getByUserAtLoginSuccess = createAction(
    '[Admin] get by user at login success',
    props<{ admin: Admin }>()
);
export const getByUserAtLoginFailure = createAction(
    '[Admin] get by user at login failure',
    props<{ errorMessage: string }>()
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const isLoginAtLogin = createAction(
    '[Admin] is login at login',
);
export const resetIsLoginAtLogin = createAction(
    '[Admin] reset is login at login',
);
