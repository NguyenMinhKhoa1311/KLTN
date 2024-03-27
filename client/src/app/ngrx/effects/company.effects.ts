import { Injectable } from "@angular/core";
import { CompanyService } from "../../services/company/company.service";
import * as CompanyActions from "../../ngrx/actions/company.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CompanyEffects{
    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ){}

    getAllAndSortAtHome$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(CompanyActions.getAllAndSortAtHome),
            switchMap((action)=>{
                return this.companyService.getAllAndSort(action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map((companys)=>{
                        return CompanyActions.getAllAndSortAtHomeSuccess({companys: companys});
                    }),
                    catchError((error)=>{
                        return of(CompanyActions.getAllAndSortAtHomeFailure({error}));
                    })
                )
            })
        )
    })
}