import { createAction, props } from "@ngrx/store";
import { ServicePackage } from "../../models/service-package.model";

export const getAllAtCreatJob = createAction('getAllAtCreatJob')

export const getAllAtCreatJobSuccess = createAction(
    'getAllAtCreatJobSuccess',
    props<{servicvePackages: ServicePackage[]}>()
    )

export const getAllAtCreatJobFailure = createAction(
    'getAllAtCreatJobFailure',
    props<{error: string}>()
    )   