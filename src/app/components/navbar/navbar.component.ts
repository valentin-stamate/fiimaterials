import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('style')
  mainStyle: string = 'blue-style';

  quote: string;

  logoSubtitles: string[] = [
    'If it Looks Like Some Website... You\'re Right',
    'The Project Birthday is on 6th February 2020'
  ];

  sidenavClosed = true;

  constructor() {
    this.quote = this.pickRandomSubtitle();
  }

  ngOnInit(): void {
  }

  pickRandomSubtitle() {
    const len = this.logoSubtitles.length;
    return this.logoSubtitles[Math.floor(Math.random() * len)];
  }

  onToggleSidenav() {
    this.sidenavClosed = !this.sidenavClosed;

    const overflowHiddenClass = 'overflow-hidden';
    if (this.sidenavClosed) {
      document.body.classList.remove(overflowHiddenClass);
    } else {
      document.body.classList.add(overflowHiddenClass);
    }

  }

}
