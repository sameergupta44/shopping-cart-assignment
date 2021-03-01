import { Action, createAction, props } from '@ngrx/store';

export const LOGIN_ATTEMPT = '[LOGIN] LOGIN_ATTEMPT';
export const LOGIN_ATTEMPT_SUCCESS = '[LOGIN] LOGIN_ATTEMPT_SUCCESS';
export const LOGIN_ATTEMPT_FAIL = '[LOGIN] LOGIN_ATTEMPT_FAIL';

export const REGISTER_ATTEMPT = '[LOGIN] REGISTER_ATTEMPT';


export const LoginAttempt = createAction(LOGIN_ATTEMPT, props<{ payload: { username: string, password: string} }>());
export const LoginAttemptSuccess = createAction(LOGIN_ATTEMPT_SUCCESS);
export const LoginAttemptFail = createAction(LOGIN_ATTEMPT_FAIL);

export const RegisterAttempt = createAction(REGISTER_ATTEMPT, props<{ payload: { data: any } }>());
