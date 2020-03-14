import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Themeswitcher} from './services/themeswitcher';
import {FeedbackService} from './services/feedback.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LayoutSizeService} from './services/layout-size.service';
import {MatMenuTrigger} from '@angular/material/menu';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FeedbackService, AngularFirestore]
})
export class AppComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(public themeSwitcher: Themeswitcher,
              private layoutSizeService: LayoutSizeService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.themeSwitcher.onDarkTheme('dark-theme');
    this.layoutSizeService.setSmallScreen(window.innerWidth);

    const date = new Date();
    date.setMonth(date.getMonth() + 6);

    this.cookieService.set('blema', 'blea din nou', date);

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.layoutSizeService.setSmallScreen(window.innerWidth);
  }

  onOpenDropdown() {
    this.trigger.openMenu();
  }

  onCloseDropdown() {
    this.trigger.closeMenu();
    alert();
  }

}
