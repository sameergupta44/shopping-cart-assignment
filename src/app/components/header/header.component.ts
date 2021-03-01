import { Component, ElementRef, OnInit } from '@angular/core';
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
  loginStatus$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.cartData$ = this.store.select(fromRoot.getCartItemsCountSelector);
    this.loginStatus$ = this.store.select(fromRoot.isUserLoggedInSelector);
  }

  ngOnInit(): void {
  }

  toggleOverlay(): void {
    const overlay = document.getElementById('overlay');
    console.log(overlay);
    if (overlay) {
      overlay.classList.remove('hhidden');
      overlay.classList.add('sshow');
      console.log(overlay.classList);
    }
  }

}
