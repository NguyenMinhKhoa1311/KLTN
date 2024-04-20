import { createAction, props } from "@ngrx/store";
import { Mail } from "../../models/mail.model";

export const sendMailAtAplicationList = createAction(
    '[Mail] Send Mail At Aplication List',
    props<{mail: Mail}>()
);

export const sendMailAtAplicationListSuccess = createAction(
    '[Mail] Send Mail At Aplication List Success',
);

export const sendMailAtAplicationListFailure = createAction(
    '[Mail] Send Mail At Aplication List Failure',
    props<{error: string}>()
);