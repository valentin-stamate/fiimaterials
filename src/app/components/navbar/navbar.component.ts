import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('style')
  mainStyle: string = 'blue-style';

  logoSubtitles: string[] = [
    'If it Looks Like Some Website... You\'re Right',
    'The Project Birthday is on 6th February 2020'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  pickRandomSubtitle() {
    const len = this.logoSubtitles.length;
    return this.logoSubtitles[Math.floor(Math.random() * len)];
  }

}
