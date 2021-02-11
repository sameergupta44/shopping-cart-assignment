import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HomeActions from '../../reducers/home/home.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerData$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.bannerData$ = this.store.select(fromRoot.getBannerDataSelector);
   }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.LoadBannerResults());
  }

}
