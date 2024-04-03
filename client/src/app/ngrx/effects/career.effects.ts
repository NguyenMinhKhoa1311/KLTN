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

    getAllAtJob$ = createEffect(()=>
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

    getByFieldNameAtJob$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getByFieldNameAtJob),
            exhaustMap((action)=>
                this.careerService.getByFieldName(action.fieldName).pipe(
                    map((careers)=>{
                        return CareerActions.getByFieldNameAtJobSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getByFieldNameAtJobFailure({error}))
                    })
                )
            )

        )
    )

    getAllAtCreateProfile$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getAllAtCreateProfile),
            exhaustMap(()=>
                this.careerService.getAll().pipe(
                    map((careers)=>{
                        return CareerActions.getAllAtCreateProfileSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getAllAtCreateProfileFailure({error}))
                    })
                )
            )

        )
    )

    getByFieldAtProfile$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getByFieldAtProfile),
            exhaustMap((action)=>
                this.careerService.getByField(action.field).pipe(
                    map((careers)=>{
                        return CareerActions.getByFieldAtProfileSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getByFieldAtProfileFailure({error}))
                    })
                )
            )

        )
    )

    getAllAtCreateJob$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getAllAtCreateJob),
            exhaustMap(()=>
                this.careerService.getAll().pipe(
                    map((careers)=>{
                        return CareerActions.getAllAtCreateJobSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getAllAtCreateJobFailure({error}))
                    })
                )
            )

        )
    )

    getByFieldAtJob$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CareerActions.getByFieldAtCreateJob),
            exhaustMap((action)=>
                this.careerService.getByField(action.field).pipe(
                    map((careers)=>{
                        return CareerActions.getByFieldAtCreateJobSuccess({careers: careers})
                    }),
                    catchError((error)=>{
                        return of(CareerActions.getAllAtCreateJobFailure({error}))
                    })
                )
            )

        )
    )



}