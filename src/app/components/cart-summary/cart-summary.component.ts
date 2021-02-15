import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { ProductItem } from '../../interface/ProductItem';
import { Observable } from 'rxjs';
import * as CartActions from '../../reducers/cart/cart.action';
import { CartItem } from 'src/app/interface/CartItem';

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

  addToCart(item: ProductItem): void {
    console.log(item);

    const cartItem: CartItem = {
      id: item.id,
      category: item.category,
      imageURL: item.imageURL,
      name: item.name,
      price: item.price,
      quantity: 1,
      sku: item.sku
    };

    this.store.dispatch(CartActions.CartAddItem({ payload: cartItem }));
  }

  removeFromCart(item: ProductItem): void {

    const cartItem: CartItem = {
      id: item.id,
      category: item.category,
      imageURL: item.imageURL,
      name: item.name,
      price: item.price,
      quantity: 1,
      sku: item.sku
    };

    this.store.dispatch(CartActions.CartRemoveItem({ payload: cartItem }));

  }
}
