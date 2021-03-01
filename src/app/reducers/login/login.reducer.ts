import * as LoginActions from './login.action';
import { LoginState } from '../../interface/LoginState';
import { createReducer, on } from '@ngrx/store';


const initState: LoginState = {
  isloggedIn: false
};

export const reducer = createReducer(
  initState,
  on(LoginActions.LoginAttemptSuccess, (state: LoginState) => {
    return {
              ...state,
              isloggedIn: true
            };
  }),
  on(LoginActions.LoginAttemptFail, (state: LoginState) => {
    return {
              ...state,
              isloggedIn: false
            };
  }),
);
