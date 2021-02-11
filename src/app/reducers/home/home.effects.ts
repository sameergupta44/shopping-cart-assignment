import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as HomeActions from './home.action';
import { Observable, of, combineLatest, forkJoin } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter, tap, mapTo } from 'rxjs/operators';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../index';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions,
              private dataService: DataService,
              public router: Router,
              private store$: Store<fromRoot.State>) { }


  loadResults$ = createEffect(() => {
    return this.actions$.pipe(ofType(HomeActions.LOAD_BANNER_RESULTS),
      switchMap(() => {
        return this.dataService.getBannersData()
          .pipe(map(obj => {
            console.log('get result');
            console.log(obj);
            if (obj) {
              console.log(obj);
              const bannerData: any[] = obj;
              return HomeActions.LoadBannerResultsComplete({ payload: bannerData });
            }
            console.log('else retry');
            return HomeActions.LoadBannerResults();
          }),
            catchError(error => {
              console.log(error);
              return of(HomeActions.LoadBannerResults());
            })
          );
      })
    );
  });



}
