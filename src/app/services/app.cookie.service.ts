import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppCookieService {
  yearURLIdentifier = 'KY8iigt8YHIKUY8fR';
  semesterIdentifier = 'TU&I&6ed&%EURJTihuoU';

  constructor(private cookieService: CookieService) { }

  setYearCookie(url) {
    this.setSemesterCookie('0');
    this.cookieService.set(this.yearURLIdentifier, url, this.getDate(), '/');
  }

  setSemesterCookie(n: string) {
    this.cookieService.set(this.semesterIdentifier, n, this.getDate(), '/');
  }

  getYearURL() {
    return this.cookieService.get(this.yearURLIdentifier).replace('%2', '/');
  }

  getSemesterFromCookie() {
    const n = this.cookieService.get(this.semesterIdentifier);
    if (n === '1') {
      return 1;
    }
    return 0;
  }

  private getDate(): Date {
    const date = new Date();
    date.setMonth(date.getMonth() + 6);
    return date;
  }

}
