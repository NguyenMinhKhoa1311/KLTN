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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtManageRecruiter = createAction(
    '[Recruiter] Get All At Manage Recruiter'
)
export const getAllAtManageRecruiterSuccess = createAction(
    '[Recruiter] Get All At Manage Recruiter Success',
    props<{ recruiters: Recruiter[] }>()
)
export const getAllAtManageRecruiterFailure = createAction(
    '[Recruiter] Get All At Manage Recruiter Failure',
    props<{ errorMessage: string }>()
)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const updateAtProfile = createAction(
    '[Recruiter] update at profile',
    props<{ id: string, newProfile: any, token: string }>()
)
export const updateAtProfileSuccess = createAction(
    '[Recruiter] update at profile success',
    props<{ recruiter: Recruiter }>()
)
export const updateAtProfileFailure = createAction(
    '[Recruiter] update at profile failure',
    props<{ errorMessage: string }>()
)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
export const getBy_idAtProfile = createAction(
    '[Recruiter] Get By Id At Profile',
    props<{ id: string }>()
)
export const getBy_idAtProfileSuccess = createAction(
    '[Recruiter] Get By Id At Profile Success',
    props<{ recruiter: Recruiter }>()
)
export const getBy_idAtProfileFailure = createAction(
    '[Recruiter] Get By Id At Profile Failure',
    props<{ errorMessage: string }>()
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const haveRecruiterAtLogin = createAction(
    '[Recruiter] Have Recruiter At Login',
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const resetHaveRecruiterAtNavbar = createAction(
    '[Recruiter] Reset Have Recruiter At Navbar',
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const haveRecruiterAtRegister = createAction(
    '[Recruiter] Have Recruiter At Register',
)