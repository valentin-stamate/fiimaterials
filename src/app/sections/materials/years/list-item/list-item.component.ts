import {Component, Input, OnInit} from '@angular/core';
import {ListItem} from '../listItem.module';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input('listItem') listItem: ListItem;
  constructor() { }

  ngOnInit(): void {
  }

}
