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

    getAllAtCompany$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(CompanyActions.getAllAtCompany),
            switchMap((action)=>{
                return this.companyService.getAll(action.page, action.limit).pipe(
                    map((companys)=>{
                        return CompanyActions.getAllAtCompanySuccess({companys: companys});
                    }),
                    catchError((error)=>{
                        return of(CompanyActions.getAllAtCompanyFailure({error}));
                    })
                )
            })
        )
    })
}