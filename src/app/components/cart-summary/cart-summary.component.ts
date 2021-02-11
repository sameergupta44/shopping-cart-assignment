import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  @Input() cartDetails$!: Observable<any>;
  cartTotal$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.cartTotal$ = this.store.select(fromRoot.getCartTotalSelector);
   }

  ngOnInit(): void {

  }
}
