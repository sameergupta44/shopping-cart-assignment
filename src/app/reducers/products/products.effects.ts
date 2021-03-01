import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.action';
import { Observable, of, combineLatest, forkJoin } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter, tap, mapTo } from 'rxjs/operators';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../index';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/interface/Category';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions,
              private dataService: DataService,
              public router: Router,
              private store$: Store<fromRoot.State>) { }


  loadProductsResults$ = createEffect(() => {
    return this.actions$.pipe(ofType(ProductsActions.LOAD_PRODUCT_RESULTS),
      switchMap(() => {
        return this.dataService.getProductsData()
          .pipe(map(obj => {
            console.log('get result');
            console.log(obj);
            if (obj) {
              console.log(obj);
              const bannerData: any[] = obj;
              return ProductsActions.LoadProductResultsComplete({ payload: bannerData });
            }
            console.log('else retry');
            return ProductsActions.LoadProductResults();
          }),
            catchError(error => {
              console.log(error);
              return of(ProductsActions.LoadProductResults());
            })
          );
      })
    );
  });

  loadCategoryResults$ = createEffect(() => {
    return this.actions$.pipe(ofType(ProductsActions.LOAD_CATEGORY_RESULTS),
      switchMap(() => {
        return this.dataService.getCategoryData()
          .pipe(map(obj => {
            console.log('get category result');
            console.log(obj);
            if (obj) {
              console.log(obj);
              const bannerData: Category[] = obj;
              return ProductsActions.LoadCategoryResultsComplete({ payload: bannerData });
            }
            console.log('else retry');
            return ProductsActions.LoadCategoryResults();
          }),
            catchError(error => {
              console.log(error);
              return of(ProductsActions.LoadCategoryResults());
            })
          );
      })
    );
  });

}
