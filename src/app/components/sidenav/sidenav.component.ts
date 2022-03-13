import { Component, OnInit } from '@angular/core';
import {SidenavListItem} from "../../../script/models";

const sidenavList: SidenavListItem[] = [
  {
    name: 'Home',
    route: '/',
    icon: 'fas fa-home',
  },
  {
    name: 'Materials',
    route: '/materials',
    icon: 'fas fa-folder',
  },
  {
    name: 'Classes',
    route: '/classes',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    name: 'Feedback',
    route: '/feedback',
    icon: 'fas fa-comment',
  },
  {
    name: 'Donate',
    route: '/donate',
    icon: 'fas fa-donate',
  },
  {
    name: 'Contributors',
    route: '/contributors',
    icon: 'fas fa-users',
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

  ngOnInit(): void { }

}
