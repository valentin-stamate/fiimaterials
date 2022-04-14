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
    'The Project Started on 6th February 2020',
  ];

  sidenavOpened: boolean;

  overflowHiddenClass = 'overflow-hidden';
  sidenavOpenedClass = 'sidenav-opened';

  /* Donate section */
  listItemCopied = 0;

  ingCode = 'RO25INGB0000999908438976';
  revolutCode = 'revolut.me/valentinst';

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

  copyCode(type: number) {
    if (type === 1) {
      this.listItemCopied = 1;
      navigator.clipboard.writeText(this.ingCode);
      return;
    }

    if (type === 2) {
      this.listItemCopied = 2;
      navigator.clipboard.writeText(this.revolutCode);
      return;
    }
  }

}
