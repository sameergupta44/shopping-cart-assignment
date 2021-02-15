import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface/Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()  categoriesData$!: Observable<any>;
  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  categorySelect(category: Category): void{
    this.filter.emit(category);
  }

}
