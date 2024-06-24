import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdminService } from "../../services/admin/admin.service";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import * as AdminActions from "../actions/admin.actions";

@Injectable()
export class AdminEffects  {
    constructor(
        private action$: Actions,
        private adminService: AdminService
    ) {}

    createAtRegister$ = createEffect(()=>
        this.action$.pipe(
        ofType(AdminActions.createAtRegister),
        exhaustMap((action) => {
            return this.adminService.create(action.admin).pipe(
                map((admin) => AdminActions.createAtRegisterSuccess({ admin: admin })),
                catchError((error) => of(AdminActions.createAtRegisterFailure({ errorMessage: error }))
                )
            );
        })
    ));
    findBy_idAtRegister$ = createEffect(()=>this.action$.pipe(
        ofType(AdminActions.getBy_idAtRegister),
        exhaustMap((action) => {
            console.log('action', action);
            return this.adminService.findBy_id(action.id).pipe(
                map((admin) => AdminActions.getBy_idAtRegisterSuccess({ admin:admin })),
                catchError((error) => of(AdminActions.getBy_idAtRegisterFailure({ errorMessage: error }))
                )
            );
        })
    ));
}