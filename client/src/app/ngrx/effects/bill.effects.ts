import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as BillActions from "../actions/bill.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { BillService } from "../../services/bill/bill.service";

@Injectable()
export class BillEffects{
    constructor(
        private actions$: Actions,
        private billService: BillService
    ){}

    getByMonthAtStatistical$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BillActions.getByMonthAtStatistical),
            exhaustMap((action)=>
                this.billService.getByMonth(action.month, action.year,action.recruiter).pipe(
                    map((bills)=>{
                        return BillActions.getByMonthAtStatisticalSuccess({bills: bills})
                    }),
                    catchError((error)=>{
                        return of(BillActions.getByMonthAtStatisticalFailure({error}))
                    })
                )
            )

        )
    )
    getByYearAtStatistical$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BillActions.getByYearAtStatistical),
            exhaustMap((action)=>
                this.billService.getByYear(action.year,action.recruiter).pipe(
                    map((bills)=>{
                        return BillActions.getByYearAtStatisticalSuccess({bills: bills})
                    }),
                    catchError((error)=>{
                        return of(BillActions.getByYearAtStatisticalFailure({error}))
                    })
                )
            )

        )
    )
    getByDateAtStatistical$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BillActions.getByDateAtStatistical),
            exhaustMap((action)=>
                this.billService.getByDate(action.date,action.recruiter).pipe(
                    map((bills)=>{
                        return BillActions.getByDateAtStatisticalSuccess({bills: bills})
                    }),
                    catchError((error)=>{
                        return of(BillActions.getByDateAtStatisticalFailure({error}))
                    })
                )
            )

        )
    )
}
