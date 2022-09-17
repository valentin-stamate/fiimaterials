import { Component, OnInit } from '@angular/core';
import {SOCIAL_LINKS} from "../../../shared/const";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  socialLinks = SOCIAL_LINKS;

  isProfileDropdownOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfileDropdown() {
    const element = document.getElementById('profile-dropdown') as HTMLElement;
    this.isProfileDropdownOpened = !this.isProfileDropdownOpened;

    if (this.isProfileDropdownOpened) {
      element.classList.remove('close');
      element.classList.add('open');
    } else {
      element.classList.remove('open');
      element.classList.add('close');
    }
  }

}
