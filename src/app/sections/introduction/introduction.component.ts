import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../../services/ThemeSwitcher';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  darkTheme = false;

  constructor(private themeSwitcher: ThemeSwitcher) { }

  ngOnInit() {
  }

  toggleTheme(): void {
    this.themeSwitcher.toggleTheme();
  }

}
