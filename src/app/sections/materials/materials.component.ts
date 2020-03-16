import {Component, HostListener, OnInit} from '@angular/core';
import {Themeswitcher} from '../../services/themeswitcher';
import {ActivationEnd, Router, RouterEvent} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {AppCookieService} from '../../services/app.cookie.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  attemptToChangeUrl = false;

  constructor(public themeSwitcher: Themeswitcher, private router: Router, private cookieAppService: AppCookieService) {
    this.router.events.subscribe((event: RouterEvent) => {
       if(event instanceof ActivationEnd && this.attemptToChangeUrl){
          this.cookieAppService.setYearCookie(this.router.url);
          this.attemptToChangeUrl = false;
       }
    });
  }

  ngOnInit(): void {
    const savedYear = this.cookieAppService.getYearURL();
    this.router.navigate( [savedYear] );
  }

  onYearChanged() {
    this.attemptToChangeUrl = true;
  }

}
