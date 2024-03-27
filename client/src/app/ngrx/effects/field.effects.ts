import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FieldService } from "../../services/field/field.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as FieldActions from "../../ngrx/actions/field.actions";

@Injectable()
export class FieldEffects {
    constructor(
        private action$: Actions,
        private fieldService: FieldService
    ){}
    getAllFields$ = createEffect(()=>
    this.action$.pipe(
        ofType(FieldActions.getFieldAtHome),
        exhaustMap((action) =>
         this.fieldService.getAll(action.page,action.limit).pipe(
            map((fields)=>{
                if(fields != undefined || fields != null){
                    return FieldActions.getFieldAtHomeSuccess({fields: fields})
                }
                else{
                    return FieldActions.getFieldAtHomeFailure({err: "Get All Fields Failure"})
                }
            }),
            catchError((error) => of(FieldActions.getFieldAtHomeFailure({err: error})))))
         )
    );
    getAllNoLimit$ = createEffect(()=>
    this.action$.pipe(
        ofType(FieldActions.getAllNoLimit),
        exhaustMap(() =>
         this.fieldService.getAllNoLimit().pipe(
            map((fields)=>{
                if(fields != undefined || fields != null){
                    return FieldActions.getAllNoLimitSuccess({fields: fields})
                }
                else{
                    return FieldActions.getAllNoLimitFailure({err: "Get All Fields No Limit Failure"})
                }
            }),
            catchError((error) => of(FieldActions.getAllNoLimitFailure({err: error})))))
         )
    );
}