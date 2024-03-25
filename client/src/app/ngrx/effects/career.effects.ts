import { Injectable } from "@angular/core";
import { CareerService } from "../../services/career/career.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CareerActions from "../actions/career.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class CareerEffects{
    constructor(
        private actions$: Actions,
        private careerService: CareerService
    ){}

    getAll$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getAllAtJobs),
            exhaustMap(()=>
                this.careerService.getAll().pipe(
                    map((careers)=>{
                        return CareerActions.getAllAtJobsSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getAllAtJobsFailure({error}))
                    })
                )
            )

        )
    )
}