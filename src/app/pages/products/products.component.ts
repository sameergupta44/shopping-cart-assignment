import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../reducers/products/products.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/interface/ProductItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.productsData$ = this.store.select(fromRoot.getProductDataSelector);
   }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.LoadProductResults());
  }

  addToCart(item: ProductItem): void {
    console.log(item);
  }

}
