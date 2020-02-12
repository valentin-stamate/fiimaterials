import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {ThemeSwitcher} from './services/ThemeSwitcher';
import {FeedbackService} from './services/feedback.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeSwitcher, FeedbackService, AngularFirestore]
})
export class AppComponent {

  constructor(public themeSwitcher: ThemeSwitcher) {
  }
}
