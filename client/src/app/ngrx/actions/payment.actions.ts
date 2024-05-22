import { createAction, props } from "@ngrx/store";
import { Payment } from "../../models/payment.model";

export const createAtConfirmPayment = createAction(
    '[Payment] Create At Confirm Payment',
    props<{ bill:any}>()
    );
export const createAtConfirmPaymentSuccess = createAction(
    '[Payment] Create At Confirm Payment Success',
    props<{ payment: Payment }>()
    );
export const createAtConfirmPaymentFailure = createAction(
    '[Payment] Create At Confirm Payment Failure',
    props<{ error: string }>()
    );
