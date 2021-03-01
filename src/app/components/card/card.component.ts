import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../../interface/ProductItem';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item!: ProductItem;
  @Output() addCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: ProductItem): void {
    this.addCart.emit(item);
  }

}
