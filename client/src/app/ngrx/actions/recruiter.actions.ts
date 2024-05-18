import { createAction, props } from "@ngrx/store";
import { Recruiter } from "../../models/recruiter.model";

export const getByUserAtLogin = createAction(
    '[Recruiter] Get By User At Login',
    props<{ user: string }>()
)
export const getByUserAtLoginSuccess = createAction(
    '[Recruiter] Get By User At Login Success',
    props<{ recruiter: Recruiter }>()
)
export const getByUserAtLoginFailure = createAction(
    '[Recruiter] Get By User At Login Failure',
    props<{ errorMessage: string }>()
)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByUserAtRegister = createAction(
    '[Recruiter] Get By User At Register',
    props<{ user: string }>()
)
export const getByUserAtRegisterSuccess = createAction(
    '[Recruiter] Get By User At Register Success',
    props<{ recruiter: Recruiter }>()
)
export const getByUserAtRegisterFailure = createAction(
    '[Recruiter] Get By User At Register Failure',
    props<{ errorMessage: string }>()
)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createRecruiterAtRegister = createAction(
    '[Recruiter] Create Recruiter',
    props<{ recruiter: any, company: any }>()
)
export const createRecruiterAtRegisterSuccess = createAction(
    '[Recruiter] Create Recruiter Success',
    props<{ recruiter: Recruiter }>()
)
export const createRecruiterAtRegisterFailure = createAction(
    '[Recruiter] Create Recruiter Failure',
    props<{ errorMessage: string }>()
)
