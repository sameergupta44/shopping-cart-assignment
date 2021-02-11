import { Action, createAction } from '@ngrx/store';

export const LOGIN_ATTEMPT = '[LOGIN] LOGIN_ATTEMPT';
export const LOGIN_ATTEMPT_SUCCESS = '[LOGIN] LOGIN_ATTEMPT_SUCCESS';
export const LOGIN_ATTEMPT_FAIL = '[LOGIN] LOGIN_ATTEMPT_FAIL';


export const LoginAttempt = createAction(LOGIN_ATTEMPT);
export const LoginAttemptSuccess = createAction(LOGIN_ATTEMPT_SUCCESS);
export const LoginAttemptFail = createAction(LOGIN_ATTEMPT_FAIL);
