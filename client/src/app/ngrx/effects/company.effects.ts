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

    getBy_IdAtCmopanyDetail$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(CompanyActions.getBy_IdAtCmopanyDetail),
            switchMap((action)=>{
                return this.companyService.getBy_Id(action.id).pipe(
                    map((company)=>{
                        return CompanyActions.getBy_IdAtCmopanyDetailSuccess({company: company});
                    }),
                    catchError((error)=>{
                        return of(CompanyActions.getBy_IdAtCmopanyDetailFailure({error}));
                    })
                )
            })
        )
    })

    getAllAndSortAtCompany$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(CompanyActions.getAllAndSortAtCompany),
            switchMap((action)=>{
                return this.companyService.getAllAndSort(action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map((companys)=>{
                        return CompanyActions.getAllAndSortAtCompanySuccess({companys: companys});
                    }),
                    catchError((error)=>{
                        return of(CompanyActions.getAllAndSortAtCompanyFailure({error}));
                    })
                )
            })
        )
    })

    getByNameWithKeywordAtCompany$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(CompanyActions.getByNameWithKeywordAtCompany),
            switchMap((action)=>{
                return this.companyService.getByNameWithKeyword(action.keyword, action.page, action.limit, action.sortBy, action.sortOrder).pipe(
                    map((companys)=>{
                        return CompanyActions.getByNameWithKeywordAtCompanySuccess({companys: companys});
                    }),
                    catchError((error)=>{
                        return of(CompanyActions.getByNameWithKeywordAtCompanyFailure({error}));
                    })
                )
            })
        )
    })
}