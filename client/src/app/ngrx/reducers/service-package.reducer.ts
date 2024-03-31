import { createReducer, on } from "@ngrx/store";
import { ServicePackageState } from "../states/service-package.state";
import * as ServicePackageActions from "../actions/service-package.actions";

export const initialState: ServicePackageState = {
    servicePackagesTakenByGetAllAtCreateJob: [],
    isGetAllAtCreateJobSuccess: false,
    isGetAllAtCreateJobLoading: false,
    getAllAtCreateJobError: ''
}


export const servicePackageReducer = createReducer(
    initialState,
    on(ServicePackageActions.getAllAtCreatJob, (state,action)=>{
        return{
            ...state,
            isGetAllAtCreateJobLoading: true,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: ''
        }
    }),
    on(ServicePackageActions.getAllAtCreatJobSuccess, (state,action)=>{
        return{
            ...state,
            servicePackagesTakenByGetAllAtCreateJob: action.servicvePackages,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: true,

            getAllAtCreateJobError: ''
        }
    }),
    on(ServicePackageActions.getAllAtCreatJobFailure, (state,action)=>{
        return{
            ...state,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: action.error
        }
    })
)
