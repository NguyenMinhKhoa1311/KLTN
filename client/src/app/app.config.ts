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
    provideEffects([
      AuthEffects,
      UserEffects,
      CandidateEffects,
      JobEffects,
      FieldEffects,
      CompanyEffects

    ]),
    provideHttpClient(),
    
  ]
};
