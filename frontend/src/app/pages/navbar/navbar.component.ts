import { Component, OnInit } from '@angular/core';
import {DONATIONS, SOCIAL_LINKS} from "../../../shared/const";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  socialLinks = SOCIAL_LINKS;
  donations = DONATIONS;

  isDonationDropdownOpened = false;
  isProfileDropdownOpened = false;
  isContactDropdownOpened = false;
  currentDonationCopy = -1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfileDropdown() {
    const element = document.getElementById('profile-dropdown') as HTMLElement;
    this.isProfileDropdownOpened = !this.isProfileDropdownOpened;
    this.currentDonationCopy = -1;

    if (this.isProfileDropdownOpened) {
      element.classList.remove('close');
      element.classList.add('open');
    } else {
      element.classList.remove('open');
      element.classList.add('close');
    }
  }

  toggleDonateDropdown() {
    const element = document.getElementById('donate-dropdown') as HTMLElement;
    this.isDonationDropdownOpened = !this.isDonationDropdownOpened;

    if (this.isDonationDropdownOpened) {
      element.classList.remove('close');
      element.classList.add('open');
    } else {
      element.classList.remove('open');
      element.classList.add('close');
    }
  }

  toggleContactDropdown() {
    const element = document.getElementById('contact-dropdown') as HTMLElement;
    this.isContactDropdownOpened = !this.isContactDropdownOpened;

    if (this.isContactDropdownOpened) {
      element.classList.remove('close');
      element.classList.add('open');
    } else {
      element.classList.remove('open');
      element.classList.add('close');
    }
  }

  async onCopyToClipboard(text: string, i: number) {
    await navigator.clipboard.writeText(text);
    this.currentDonationCopy = i;
  }

}
