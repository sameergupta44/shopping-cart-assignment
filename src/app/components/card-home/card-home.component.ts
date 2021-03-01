import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input() item!: any;
  @Input() idx!: number;
  // @Output() addCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // addToCart(item: ProductItem): void {
  //   this.addCart.emit(item);
  // }

}
