import { createAction, props } from "@ngrx/store";
import { ServicePackage } from "../../models/service-package.model";



//---------------------------------------------------------------------------------------------------------------- 
export const createAtPostJob = createAction(
    'createAtPostJob',
    props<{servicePackage: any}>()
)
export const createAtPostJobSuccess = createAction(
    'createAtPostJobSuccess',
    props<{servicePackage: ServicePackage}>()
)
export const createAtPostJobFailure = createAction(
    'createAtPostJobFailure',
    props<{error: string}>()
)


//----------------------------------------------------------------------------------------------------------------
export const getByIdAtPayment = createAction(
    'getByIdAtPayment',
    props<{id: string}>()
)
export const getByIdAtPaymentSuccess = createAction(
    'getByIdAtPaymentSuccess',
    props<{servicePackage: ServicePackage}>()
)
export const getByIdAtPaymentFailure = createAction(
    'getByIdAtPaymentFailure',
    props<{error: string}>()
)
