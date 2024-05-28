import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as PaymentActions from "../actions/payment.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { PaymentService } from "../../services/payment/payment.service";

@Injectable()
export class PaymentEffects{
    constructor(
        private actions$: Actions,
        private paymentService: PaymentService
    ){}

    createPayment$ = createEffect(()=>
        this.actions$.pipe(
            ofType(PaymentActions.createAtConfirmPayment),
            exhaustMap((action)=>
                this.paymentService.createPayment(action.bill).pipe(
                    map((payment)=>{
                        return PaymentActions.createAtConfirmPaymentSuccess({payment: payment})
                    }),
                    catchError((error)=>{
                        return of(PaymentActions.createAtConfirmPaymentFailure({error}))
                    })
                )
            )

        )
    )
}