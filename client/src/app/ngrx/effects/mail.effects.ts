import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MailService } from "../../services/mail/mail.service";
import * as MailActions from "../../ngrx/actions/mail.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class MaillEffects {
    constructor(
        private actions$: Actions,
        private mailService: MailService
    ) {}

    sendMailAtAplicationList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MailActions.sendMailAtAplicationList),
            exhaustMap(action =>
                this.mailService.sendMail(action.mail).pipe(
                    map((result) => {
                        if(result){
                            return MailActions.sendMailAtAplicationListSuccess()
                        }
                        else{
                            return MailActions.sendMailAtAplicationListFailure({error: 'Error'})
                        }
                    }),
                    catchError((err) =>
                        of(MailActions.sendMailAtAplicationListFailure({error: err})
                    )
                )
            )
        )
        )
        )
}
