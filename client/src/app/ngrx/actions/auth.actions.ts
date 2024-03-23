import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';
import { UserFirebase } from '../../models/userFirebase.model';

export const login = createAction('[Auth] login');

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ user:UserFirebase}>()
  );

export const loginFailure = createAction(
  '[Auth] login failure',
  props<{ errorMessage: any }>()
);

export const logout = createAction('[Auth] logout');

export const logoutSuccess = createAction('[Auth] logout success');

export const logoutFailure = createAction(
  '[Auth] logout failure',
  props<{ errorMessage: any }>()
);

export const storedUserFirebase = createAction(
  '[Auth] stored user firebase',
 (userFirebase: User) => ({ userFirebase })
 );

 export const resetState = createAction('[Auth] reset state');