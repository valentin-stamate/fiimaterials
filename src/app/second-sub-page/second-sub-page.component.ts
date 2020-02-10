import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../services/ThemeSwitcher';

@Component({
  selector: 'app-second-sub-page',
  templateUrl: './second-sub-page.component.html',
  styleUrls: ['./second-sub-page.component.scss']
})
export class SecondSubPageComponent implements OnInit {
  darkTheme = false;

  constructor(private themeSwitcher: ThemeSwitcher) { }

  ngOnInit() {
  }

  toggleTheme(): void {
    this.themeSwitcher.toggleTheme();
  }

}
