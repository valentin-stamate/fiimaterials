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

  sidenavClosed = true;
  overflowHiddenClass = 'overflow-hidden'

  constructor() {
    this.quote = this.pickRandomSubtitle();
  }

  ngOnInit(): void {
    this.sidenavClosed = true;
    document.body.classList.remove(this.overflowHiddenClass);
  }

  pickRandomSubtitle() {
    const len = this.logoSubtitles.length;
    return this.logoSubtitles[Math.floor(Math.random() * len)];
  }

  onToggleSidenav() {
    this.sidenavClosed = !this.sidenavClosed;

    if (this.sidenavClosed) {
      document.body.classList.remove(this.overflowHiddenClass);
    } else {
      document.body.classList.add(this.overflowHiddenClass);
    }

  }

}
