import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidateService } from "../../services/candidate/candidate.service";
import * as CandidateActions from "../actions/candidate.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { isCandidate } from "../../models/candidate.model";

@Injectable()
export class CandidateEffects{
    constructor(
        private action$: Actions,
        private candidateService: CandidateService
    ){}
    createCandidateWithGoogleAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.createCandidateWithGoogleAtLogin),
        exhaustMap((action) =>
         this.candidateService.create(action.candidate).pipe(
            map((item)=>{
                if(item != undefined || item != null|| isCandidate(item)){
                    return CandidateActions.createCandidateWithGoogleAtLoginSuccess()
                }
                else{
                    return CandidateActions.createCandidateWithGoogleAtLoginFailure({error: "Create Candidate With Google At Login Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.createCandidateWithGoogleAtLoginFailure({error: error})))))
         )
    );
    getCandidateByUserWithGoogleAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.getByUserWithGoogleAtLogin),
        exhaustMap((action) =>
         this.candidateService.getByUser(action.user).pipe(
            map((item)=>{
                if(item != undefined || item != null || isCandidate(item) ){
                    return CandidateActions.getByUserWithGoogleAtLoginSuccess({candidate: item})
                }
                else{
                    return CandidateActions.getByUserWithGoogleAtLoginFailure({error: "Get By User With Google At Login Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.getByUserWithGoogleAtLoginFailure({error: error})))))
         )
    );
}