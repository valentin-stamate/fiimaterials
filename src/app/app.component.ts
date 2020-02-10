import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {ThemeSwitcher} from './services/ThemeSwitcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeSwitcher]
})
export class AppComponent {

  constructor(public themeSwitcher: ThemeSwitcher) {
  }
}
