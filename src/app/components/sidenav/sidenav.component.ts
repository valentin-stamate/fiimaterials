import { Component, OnInit } from '@angular/core';
import {SidenavListItem} from "../../../script/models";
import {UtilService} from "../../../script/util";

const sidenavList: SidenavListItem[] = [
  {
    name: 'Home',
    route: '/',
    icon: 'fas fa-home',
    active: true,
  },
  {
    name: 'Materials',
    route: '/materials',
    icon: 'fas fa-folder',
    active: false,
  },
  {
    name: 'Feedback',
    route: '/feedback',
    icon: 'fas fa-comment',
    active: false,
  }
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
