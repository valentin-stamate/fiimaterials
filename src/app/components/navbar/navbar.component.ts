import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  quote: string;

  logoSubtitles: string[] = [
    'If it Looks Like Some Website... You\'re Right',
    'The Project Birthday is on 6th February 2020'
  ];

  sidenavOpened: boolean;

  overflowHiddenClass = 'overflow-hidden';
  sidenavOpenedClass = 'sidenav-opened';

  constructor() {
    this.quote = this.pickRandomSubtitle();
    this.sidenavOpened = false;
  }

  ngOnInit(): void {
    this.sidenavOpened = false;
    this.refreshSidenav();
  }

  pickRandomSubtitle() {
    const len = this.logoSubtitles.length;
    return this.logoSubtitles[Math.floor(Math.random() * len)];
  }

  onToggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.refreshSidenav();
  }

  refreshSidenav() {
    const sidenav = document.getElementById('sidenav');
    const sidenavCover = document.getElementById('sidenav-cover');

    if (sidenav && sidenavCover) {
      if (this.sidenavOpened) {
        sidenav.classList.add(this.sidenavOpenedClass);
        sidenavCover.hidden = false;
      } else {
        sidenav.classList.remove(this.sidenavOpenedClass);
        sidenavCover.hidden = true;
      }
    }

    if (this.sidenavOpened) {
      document.body.classList.add(this.overflowHiddenClass);
    } else {
      document.body.classList.remove(this.overflowHiddenClass);
    }
  }

}
