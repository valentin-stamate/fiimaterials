import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Themeswitcher} from './services/themeswitcher';
import {FeedbackService} from './services/feedback.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LayoutSizeService} from './services/layout-size.service';
import {MatMenuTrigger} from '@angular/material/menu';
import {CookieService} from 'ngx-cookie-service';
import {ThemePalette} from '@angular/material/core';

export interface SidebarLink {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FeedbackService, AngularFirestore]
})
export class AppComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() color: ThemePalette;

  folders: SidebarLink[] = [
    {
      name: 'Acasa',
      link: '',
      icon: 'home'
    },
    {
      name: 'Linkuri Utile',
      link: './useful-links',
      icon: 'link'
    },
    {
      name: 'Feedback',
      link: './feedback',
      icon: 'feedback'
    },
    {
      name: 'Credits',
      link: './credits',
      icon: 'scatter_plot'
    },
  ];

  constructor(public themeSwitcher: Themeswitcher,
              private layoutSizeService: LayoutSizeService) {
  }

  ngOnInit() {
    this.themeSwitcher.onDarkTheme('dark-theme');
    this.layoutSizeService.setSmallScreen(window.innerWidth);


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
