import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../reducers/products/products.action';
import * as CartActions from '../../reducers/cart/cart.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/interface/ProductItem';
import { CartItem } from 'src/app/interface/CartItem';
import { Category } from 'src/app/interface/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData$: Observable<any>;
  categoriesData$: Observable<any>;
  filterData$: Observable<any>;
  cartData$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.productsData$ = this.store.select(fromRoot.getProductDataSelector);
    this.cartData$ = this.store.select(fromRoot.getCartItemsSelector);
    this.categoriesData$ = this.store.select(fromRoot.getCategoryDataSelector);
    this.filterData$ = this.store.select(fromRoot.getFilterDataSelector);
   }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.LoadProductResults());
    this.store.dispatch(ProductActions.LoadCategoryResults());
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

  filterVal(categoryItem: Category): void {
    console.log(categoryItem);
    this.store.dispatch(ProductActions.ApplyFilter({ payload: categoryItem }));
  }

}
