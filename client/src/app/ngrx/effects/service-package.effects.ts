import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; // Import the 'Actions' class from the '@ngrx/effects' package
import { ServicePackageService } from "../../services/service-package/service-package.service";
import { catchError, exhaustMap, map } from "rxjs/operators"; // Import the 'catchError', 'exhaustMap', and 'map' operators from the 'rxjs/operators' package
import * as ServicePackageActions from "../actions/service-package.actions"; // Import the 'ServicePackageActions' object from the '../actions/service-package.actions' file
import { of } from "rxjs";


@Injectable()
export class ServicePackageEffects{
    constructor(private action$: Actions, private servicePackageService: ServicePackageService){}

    getAllAtCreateJob$ = createEffect(()=>
        this.action$.pipe(
            ofType(ServicePackageActions.getAllAtCreatJob),
            exhaustMap(()=>
                this.servicePackageService.getAll().pipe(
                    map((servicePackages)=>{
                        return ServicePackageActions.getAllAtCreatJobSuccess({servicvePackages: servicePackages})
                    }),
                    catchError((error)=>{
                        return of(ServicePackageActions.getAllAtCreatJobFailure({error}))
                    })
                )
            )

        )
    )
}