import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as LoginActions from './login.action';
import { Observable, of, combineLatest, forkJoin } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter, tap, mapTo } from 'rxjs/operators';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../index';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions,
              public router: Router,
              private store$: Store<fromRoot.State>) { }

}
