import { createReducer, on } from "@ngrx/store";
import { ServicePackageState } from "../states/service-package.state";
import * as ServicePackageActions from "../actions/service-package.actions";
import { ServicePackage } from "../../models/service-package.model";

export const initialState: ServicePackageState = {
    isCreateAtPostJobLoading: false,
    isCreateAtPostJobSuccess: false,
    createAtPostJobError: '',
    servicePackageCreatedAtPostJob: <ServicePackage>{}
}


export const servicePackageReducer = createReducer(
    initialState,
    on(ServicePackageActions.createAtPostJob, (state) => ({
        ...state,
        isCreateAtPostJobLoading: true,
        isCreateAtPostJobSuccess: false,
        createAtPostJobError: ''
    })),
    on(ServicePackageActions.createAtPostJobSuccess, (state,action) => ({
        ...state,
        servicePackageCreatedAtPostJob: action.servicePackage,
        isCreateAtPostJobLoading: false,
        isCreateAtPostJobSuccess: true,
        createAtPostJobError: ''
    })),
    on(ServicePackageActions.createAtPostJobFailure, (state, action) => ({
        ...state,
        isCreateAtPostJobLoading: false,
        isCreateAtPostJobSuccess: false,
        createAtPostJobError: action.error
    }))

)
