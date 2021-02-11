import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as LoginActions from './login.action';
import { Observable, of, combineLatest, forkJoin } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter, tap, mapTo } from 'rxjs/operators';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../index';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions,
              public router: Router,
              private dataService: DataService,
              private store$: Store<fromRoot.State>) { }

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.LOGIN_ATTEMPT_SUCCESS),
      tap(() => this.router.navigate(['home']))
    );
  }, { dispatch: false });

  loadResults$ = createEffect(() => {
    return this.actions$.pipe(ofType(LoginActions.LOGIN_ATTEMPT),
     map((action: any) => action.payload),
      switchMap((data: any) => {
        return this.dataService.loginCheck(data)
          .pipe(map(obj => {
            console.log('get result');
            console.log(obj);
            if (obj) {
              // this.store$.dispatch(LoginActions.LoginAttemptSuccess());
              return LoginActions.LoginAttemptSuccess();
            }
            console.log('else retry');
            return LoginActions.LoginAttemptFail();
          }),
            catchError(error => {
              console.log(error);
              return of(LoginActions.LoginAttemptFail());
            })
          );
      })
    );
  });

}
