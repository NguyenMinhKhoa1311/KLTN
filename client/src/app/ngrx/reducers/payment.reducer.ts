import { createReducer, on } from "@ngrx/store";
import { Payment } from "../../models/payment.model";
import { PaymentSate } from "../states/payment.state";
import * as PaymentActions from '../actions/payment.actions';

export const initialState: PaymentSate = {
    paymentCreatedAtConfirmPayment: <Payment>{},
    isCreateAtConfirmPaymentLoading: false,
    isCreateAtConfirmPaymentSuccess: false,
    createAtConfirmPaymentError: ''
};

export const PaymentReducer = createReducer(
    initialState,
    on(PaymentActions.createAtConfirmPayment, (state,action) => {
        return{
            ...state,
            isCreateAtConfirmPaymentLoading: true,
            isCreateAtConfirmPaymentSuccess: false,
            createAtConfirmPaymentError: ''
        }
    }),
    on(PaymentActions.createAtConfirmPaymentSuccess, (state,action) => {
        return{
            ...state,
            paymentCreatedAtConfirmPayment: action.payment,
            isCreateAtConfirmPaymentLoading: false,
            isCreateAtConfirmPaymentSuccess: true,
            createAtConfirmPaymentError: ''
        }
    }),
    on(PaymentActions.createAtConfirmPaymentFailure, (state,action) => {
        return{
            ...state,
            isCreateAtConfirmPaymentLoading: false,
            isCreateAtConfirmPaymentSuccess: false,
            createAtConfirmPaymentError: action.error
        }
    })
    
);
