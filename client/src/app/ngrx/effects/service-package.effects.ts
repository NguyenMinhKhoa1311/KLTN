import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; // Import the 'Actions' class from the '@ngrx/effects' package
import { ServicePackageService } from "../../services/service-package/service-package.service";
import { catchError, exhaustMap, map } from "rxjs/operators"; // Import the 'catchError', 'exhaustMap', and 'map' operators from the 'rxjs/operators' package
import * as ServicePackageActions from "../actions/service-package.actions"; // Import the 'ServicePackageActions' object from the '../actions/service-package.actions' file
import { of } from "rxjs";


@Injectable()
export class ServicePackageEffects{
    constructor(private action$: Actions, private servicePackageService: ServicePackageService){}

    createAtPostJob$ = createEffect(() => // Create a new effect called 'createAtPostJob$'
        this.action$.pipe( // Use the 'pipe' method to combine multiple operators into a single function
            ofType(ServicePackageActions.createAtPostJob), // Use the 'ofType' operator to filter the actions emitted by the 'action$' observable
            exhaustMap(action => // Use the 'exhaustMap' operator to handle the action and return a new observable
                this.servicePackageService.create(action.servicePackage).pipe( // Call the 'create' method of the 'servicePackageService' service and return the observable
                    map((service) => {
                        if(service._id !='500'){
                            return ServicePackageActions.createAtPostJobSuccess({servicePackage:service}) // Use the 'map' operator to map the successful response to the 'createAtPostJobSuccess' action
                        }else{
                            return ServicePackageActions.createAtPostJobFailure({error: 'Failed to create service package'}) // Use the 'map' operator to map the failed response to the 'createAtPostJobFailure' action
                        }
                    }, // Use the 'map' operator to map the successful response to the 'createAtPostJobSuccess' action
                    catchError(error => of(ServicePackageActions.createAtPostJobFailure({error}))) // Use the 'catchError' operator to handle errors and map them to the 'createAtPostJobFailure' action
                )
            )
        )
    )
)
}