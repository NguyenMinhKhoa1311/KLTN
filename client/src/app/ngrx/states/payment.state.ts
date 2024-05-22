import { Payment } from "../../models/payment.model";

export interface PaymentSate{
    paymentCreatedAtConfirmPayment: Payment;
    isCreateAtConfirmPaymentLoading: boolean;
    isCreateAtConfirmPaymentSuccess: boolean;
    createAtConfirmPaymentError: string;
}