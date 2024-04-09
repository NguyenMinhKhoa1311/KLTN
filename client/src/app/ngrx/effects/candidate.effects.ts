import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidateService } from "../../services/candidate/candidate.service";
import * as CandidateActions from "../actions/candidate.actions";
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class CandidateEffects{
    constructor(
        private action$: Actions,
        private candidateService: CandidateService
    ){}

    getCandidateByUserWithGoogleAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.getByUserWithGoogleAtLogin),
        exhaustMap((action) =>
         this.candidateService.getByUser(action.user).pipe(
            map((item)=>{
                if(item._id.length>0 ){
                    return CandidateActions.getByUserWithGoogleAtLoginSuccess({candidate: item})
                }
                else{
                    return CandidateActions.getByUserWithGoogleAtLoginFailure({error: "Get By User With Google At Login Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.getByUserWithGoogleAtLoginFailure({error: error})))))
         )
    );

    createCandidateAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.createCandidateAtCreateProfile),
        exhaustMap((action) =>
        
         this.candidateService.create(action.candidate).pipe(
            map((item)=>{
                console.log(item);
                if(item._id.length>0 ){
                    console.log('create candidate success');
                    
                    return CandidateActions.createCandidateAtCreateProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.createCandidateAtCreateProfileFailure({error: "Create Candidate At Register Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.createCandidateAtCreateProfileFailure({error: error})))))
         )
    );

    
    getCandidateByUserWithGoogleAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.getByUserWithGoogleAtRegister),
        exhaustMap((action) =>
         this.candidateService.getByUser(action.user).pipe(
            map((item)=>{

                
                if(item._id.length>0){
                    return CandidateActions.getByUserWithGoogleAtRegisterSuccess({candidate: item})
                }
                else{
                    return CandidateActions.getByUserWithGoogleAtRegisterFailure({error: "Get By User With Google At Register Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.getByUserWithGoogleAtRegisterFailure({error: error})))))
         )
    );


    updateEducationAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateEducationAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateEducation(action.education, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateEducationAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateEducationAtProfileFailure({error: "Update Education At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateEducationAtProfileFailure({error: error})))))
         )
    );

    updateWorkExperienceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateWorkExperienceAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateWorkExperience(action.workExperience, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateWorkExperienceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateWorkExperienceAtProfileFailure({error: "Update Work Experience At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateWorkExperienceAtProfileFailure({error: error})))))
         )
    );

    updateLanguageAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateLanguageAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateLanguage(action.language, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateLanguageAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateLanguageAtProfileFailure({error: "Update Language At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateLanguageAtProfileFailure({error: error})))))
         )
    );


    updateDesiredJobAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateDesiredJobAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateDesiredJob(action.desiredJob, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateDesiredJobAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateDesiredJobAtProfileFailure({error: "Update Desired Job At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateDesiredJobAtProfileFailure({error: error})))))
         )
    );
    updateSkillAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateSkillAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateSkill(action.skill, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateSkillAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateSkillAtProfileFailure({error: "Update Skill At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateSkillAtProfileFailure({error: error})))))
         )
    );
    updateAvatarAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateAvatarAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateAvatar( action.id, action.storage).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateAvatarAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateAvatarAtProfileFailure({error: "Update Avatar At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateAvatarAtProfileFailure({error: error})))))
         )
    );
    updateBasicInfoAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateBasicInfoAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateBasicInfo(action.basicInfo, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateBasicInfoAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateBasicInfoAtProfileFailure({error: "Update Basic Info At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateBasicInfoAtProfileFailure({error: error})))))
         )
    );
}