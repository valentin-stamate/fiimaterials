import { Component, OnInit } from '@angular/core';
import {DONATIONS, SOCIAL_LINKS} from "../../../shared/const";
import {NavBarConfig} from "../../interfaces/interfaces";

const enum DropdownId {
  DONATE = 'donate-dropdown',
  CONTACT = 'contact-dropdown',
  PROFILE = 'profile-dropdown',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  socialLinks = SOCIAL_LINKS;
  donations = DONATIONS;

  config: NavBarConfig = {
    isDonationDropdownOpened: false,
    isProfileDropdownOpened: false,
    isContactDropdownOpened: false,
  }
  currentDonationCopy = -1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfileDropdown() {
    const state = !this.config.isProfileDropdownOpened;
    this.closeAllDropdowns();
    this.config.isProfileDropdownOpened = state;
    this.currentDonationCopy = -1;

    this.changeDropdownState(DropdownId.PROFILE, state)
  }

  toggleDonateDropdown() {
    const state = !this.config.isDonationDropdownOpened;
    this.closeAllDropdowns();
    this.config.isDonationDropdownOpened = state;

    this.changeDropdownState(DropdownId.DONATE, state)
  }

  toggleContactDropdown() {
    const state = !this.config.isContactDropdownOpened;
    this.closeAllDropdowns();
    this.config.isContactDropdownOpened = state;

    this.changeDropdownState(DropdownId.CONTACT, state);
  }

  changeDropdownState(elementId: string, state: boolean) {
    const element = document.getElementById(elementId) as HTMLElement;

    if (state) {
      element.classList.remove('close');
      element.classList.add('open');
    } else {
      element.classList.remove('open');
      element.classList.add('close');
    }
  }

  closeAllDropdowns() {
    if (this.config.isContactDropdownOpened) {
      this.changeDropdownState(DropdownId.CONTACT, false);
      this.config.isContactDropdownOpened = false;
    }

    if (this.config.isDonationDropdownOpened) {
      this.changeDropdownState(DropdownId.DONATE, false);
      this.config.isDonationDropdownOpened = false;
    }

    if (this.config.isProfileDropdownOpened) {
      this.changeDropdownState(DropdownId.PROFILE, false);
      this.config.isProfileDropdownOpened = false;
    }
  }

  async onCopyToClipboard(text: string, i: number) {
    await navigator.clipboard.writeText(text);
    this.currentDonationCopy = i;
  }

}
