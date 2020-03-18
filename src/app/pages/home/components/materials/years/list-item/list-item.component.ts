import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ListItem} from '../listItem.module';
import {LayoutSizeService} from '../../../../../../services/layout-size.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input('listItem') listItem: ListItem;

  constructor(public layoutSizeService: LayoutSizeService) { }

  ngOnInit(): void {
  }

}
