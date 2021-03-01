import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() bannerData$!: any;

  customOptions: OwlOptions;

  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        }
      },
      nav: false
    };
  }

  ngOnInit(): void {
  }

}
