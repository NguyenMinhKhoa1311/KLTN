import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideFirebaseApp,initializeApp } from "@angular/fire/app";
import { AuthEffects } from "./ngrx/effects/auth.effects";
import { authReducer } from "./ngrx/reducers/auth.reducer";
import { firebaseConfig } from "../environments/environments";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from "@angular/common/http";
import { userReducer } from "./ngrx/reducers/user.reducer";
import { UserEffects } from "./ngrx/effects/user.effects";
import { candidateReducer } from "./ngrx/reducers/candidate.reducer";
import { CandidateEffects } from "./ngrx/effects/candidate.effects";
import { jobReducer } from "./ngrx/reducers/job.reducer";
import { JobEffects } from "./ngrx/effects/job.effects";
import { fieldReducer } from "./ngrx/reducers/field.reducer";
import { FieldEffects } from "./ngrx/effects/field.effects";
import { companyReducer } from "./ngrx/reducers/company.reducer";
import { CompanyEffects } from "./ngrx/effects/company.effects";
import { careerReducer } from "./ngrx/reducers/career.reducer";
import { CareerEffects } from "./ngrx/effects/career.effects";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { servicePackageReducer } from "./ngrx/reducers/service-package.reducer";
import {ServicePackageEffects} from "./ngrx/effects/service-package.effects"
import { StorageEffects } from "./ngrx/effects/storage.effects";
import { storageReducer } from "./ngrx/reducers/storage.reducer";
import { recruitmentReducer } from "./ngrx/reducers/recruitment.reducer";
import { RecruitmentEffects } from "./ngrx/effects/recruitment.effects";
import { MaillEffects } from "./ngrx/effects/mail.effects";
import { mailReducer } from "./ngrx/reducers/mail.reducer";
import { RecruiterEffects } from "./ngrx/effects/recruiter.effects";
import { recruiterReducer } from "./ngrx/reducers/recruiter.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideRouter(routes), 
    importProvidersFrom(TuiRootModule), 
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      TuiRootModule,
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideStore(), 
    provideState({name:'auth', reducer: authReducer}),
    provideState({name:'user', reducer: userReducer}),
    provideState({name:'candidate', reducer: candidateReducer}),
    provideState({name:'job', reducer: jobReducer}),
    provideState({name:'field', reducer: fieldReducer}),
    provideState({name:'company', reducer: companyReducer}),
    provideState({name:'career', reducer:careerReducer}),
    provideState({name:'servicePackage', reducer: servicePackageReducer}),
    provideState({name:'storage', reducer: storageReducer}),
    provideState({name:'recruitment', reducer: recruitmentReducer}),
    provideState({name:'mail', reducer: mailReducer}),
    provideState({name:'recruiter', reducer: recruiterReducer}),
    provideEffects([
      AuthEffects,
      UserEffects,
      CandidateEffects,
      JobEffects,
      FieldEffects,
      CompanyEffects,
      CareerEffects,
      ServicePackageEffects,
      StorageEffects,
      RecruitmentEffects,
      MaillEffects,
      RecruiterEffects

    ]),
    provideHttpClient(), provideAnimationsAsync(),
    
  ]
};
