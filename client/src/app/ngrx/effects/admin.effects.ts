import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { AdminService } from "../../services/admin/admin.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as AdminActions from "../actions/admin.actions";

@Injectable()
export class AdminEffects  {
    constructor(private action$: Actions, private adminService: AdminService) {}

    createAtRegister$ = this.action$.pipe(
        ofType(AdminActions.createAtRegister),
        mergeMap((action) => {
            return this.adminService.create(action.admin).pipe(
                map((admin) => AdminActions.createAtRegisterSuccess({ admin:admin })),
                catchError((error) => of(AdminActions.createAtRegisterFailure({ errorMessage: error }))
                )
            );
        })
    );
    findBy_idAtRegister$ = this.action$.pipe(
        ofType(AdminActions.getBy_idAtRegister),
        mergeMap((action) => {
            return this.adminService.findBy_id(action.id).pipe(
                map((admin) => AdminActions.getBy_idAtRegisterSuccess({ admin:admin })),
                catchError((error) => of(AdminActions.getBy_idAtRegisterFailure({ errorMessage: error }))
                )
            );
        })
    );
}