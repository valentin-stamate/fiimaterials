export enum Cookies {
  SELECTED_YEAR = 'year',
  SELECTED_PAGE = 'page',
}

const cookieList = [
  Cookies.SELECTED_YEAR,
  Cookies.SELECTED_PAGE,
];

export class CookieService {
  static allCookies() {
    return document.cookie;
  }

  /** Reads a cookie. Return the value if found, null otherwise. */
  static readCookie(name: string) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
  }

  static setCookie(name: string, value: any, days: number = 360) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  static deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static deleteAllCookies() {
    for (const cookie of cookieList) {
      CookieService.deleteCookie(cookie);
    }
  }

}


