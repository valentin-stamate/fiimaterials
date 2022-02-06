import { Component, OnInit } from '@angular/core';
import {SidenavListItem} from "../../../script/models";
import {UtilService} from "../../../script/util";

const sidenavList: SidenavListItem[] = [
  {
    name: 'Home',
    route: '/',
    icon: 'icon',
    active: true,
  },
  {
    name: 'Materials',
    route: '/materials',
    icon: 'icon',
    active: false,
  },
]

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  list = sidenavList;

  constructor() {
    for (const item of this.list) {
      const path = UtilService.getPath();
      item.active = path === item.route;
    }
  }

  ngOnInit(): void {
  }

}
