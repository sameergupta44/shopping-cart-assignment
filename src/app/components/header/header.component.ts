import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartData$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.cartData$ = this.store.select(fromRoot.getCartItemsSelector);
   }

  ngOnInit(): void {
  }

}
