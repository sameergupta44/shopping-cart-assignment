import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HomeActions from '../../reducers/home/home.action';
import * as ProductActions from '../../reducers/products/products.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerData$: Observable<any>;
  categoriesData$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.bannerData$ = this.store.select(fromRoot.getBannerDataSelector);
    this.categoriesData$ = this.store.select(fromRoot.getCategoryDataSelector);
   }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.LoadBannerResults());
    this.store.dispatch(ProductActions.LoadCategoryResults());
  }

}
