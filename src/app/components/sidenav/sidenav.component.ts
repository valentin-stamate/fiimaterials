import { Component, OnInit } from '@angular/core';
import {SidenavListItem} from "../../../script/models";

const sidenavList: SidenavListItem[] = [
  {
    name: 'Home',
    route: '/home',
    icon: 'icon',
    active: true,
  },
  {
    name: 'Materials',
    route: '/materials',
    icon: 'icon',
    active: false,
  },
  {
    name: 'Contributors',
    route: '/contributors',
    icon: 'icon',
    active: false,
  },
  {
    name: 'About',
    route: '/about',
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

  constructor() { }

  ngOnInit(): void {
  }

}
