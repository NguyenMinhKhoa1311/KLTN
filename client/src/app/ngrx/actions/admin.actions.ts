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
