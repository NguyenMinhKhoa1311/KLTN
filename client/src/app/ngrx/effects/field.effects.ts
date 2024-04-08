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

    getAllNoLimitAtCreateProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(FieldActions.getAllNoLimitAtCreaetProfile),
        exhaustMap(() =>
         this.fieldService.getAllNoLimit().pipe(
            map((fields)=>{
                if(fields != undefined || fields != null){
                    return FieldActions.getAllNoLimitAtCreaetProfileSuccess({fields: fields})
                }
                else{
                    return FieldActions.getAllNoLimitAtCreaetProfileFailure({err: "Get All Fields No Limit At Create Profile Failure"})
                }
            }),
            catchError((error) => of(FieldActions.getAllNoLimitAtCreaetProfileFailure({err: error})))))
         )
    );


    getAllNoLimitAtCreateJob$ = createEffect(()=>
    this.action$.pipe(
        ofType(FieldActions.getAllNoLimitAtCreateJob),
        exhaustMap(() =>
         this.fieldService.getAllNoLimit().pipe(
            map((fields)=>{
                if(fields != undefined || fields != null){
                    return FieldActions.getAllNoLimitAtCreateJobSuccess({fields: fields})
                }
                else{
                    return FieldActions.getAllNoLimitAtCreateJobFailure({err: "Get All Fields No Limit At Create Job Failure"})
                }
            }),
            catchError((error) => of(FieldActions.getAllNoLimitAtCreateJobFailure({err: error})))))
         )
    );


    getAllNoLimitAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(FieldActions.getAllNoLimitAtProfile),
        exhaustMap(() =>
         this.fieldService.getAllNoLimit().pipe(
            map((fields)=>{
                if(fields != undefined || fields != null){
                    return FieldActions.getAllNoLimitAtProfileSuccess({fields: fields})
                }
                else{
                    return FieldActions.getAllNoLimitAtProfileFailure({err: "Get All Fields No Limit At Profile Failure"})
                }
            }),
            catchError((error) => of(FieldActions.getAllNoLimitAtProfileFailure({err: error})))))
         )
    );
}