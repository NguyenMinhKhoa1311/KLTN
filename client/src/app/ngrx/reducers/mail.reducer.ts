import { MailState } from "../states/mail.state";
import * as MailActions from "../actions/mail.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState: MailState = {
    isSendMailAtAplicationListLoading: false,
    isSendMailAtAplicationListSuccess: false,
    sendMailAtAplicationListError: ''
}

export const mailReducer = createReducer(
    initialState,
    on(MailActions.sendMailAtAplicationList, (state, action) => ({
        ...state,
        isSendMailAtAplicationListLoading: true,
        isSendMailAtAplicationListSuccess: false,
        sendMailAtAplicationListError: ''
    })),
    on(MailActions.sendMailAtAplicationListSuccess, (state, action) => ({
        ...state,
        isSendMailAtAplicationListLoading: false,
        isSendMailAtAplicationListSuccess: true,
        sendMailAtAplicationListError: ''
    })),
    on(MailActions.sendMailAtAplicationListFailure, (state, action) => ({
        ...state,
        isSendMailAtAplicationListLoading: false,
        isSendMailAtAplicationListSuccess: false,
        sendMailAtAplicationListError: action.error
    }))
)