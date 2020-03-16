import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppCookieService {


  constructor(private cookieService: CookieService) { }

  setYearCookie(url) {
    this.cookieService.set('KY8iigt8YHIKUY8fR', url, this.getDate(), '/');
  }

  setSemesterCookie() {

  }

  getYearURL() {
    return this.cookieService.get('KY8iigt8YHIKUY8fR').replace('%2', '/');
  }

  getSemesterFromCookie() {

  }

  private getDate(): Date {
    const date = new Date();
    date.setMonth(date.getMonth() + 6);
    return date;
  }

}
