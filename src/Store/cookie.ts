export const USER_AUTH_TOKEN_COOKIE = '0Xa4T4C7S4wGnU6Q';
export const LAST_YEAR_COOKIE = 'O9rrG8CUfnY4j0bj';

export function setCookie(key: string, value: string) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + '; expires=' + expires.toUTCString() + '; path=/;';
}

export function getCookie(key: string) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

export function deleteCookie(key: string) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
}

export function deleteCookies() {
    deleteCookie(USER_AUTH_TOKEN_COOKIE);
    deleteCookie(LAST_YEAR_COOKIE);
}

const cookie = {
    USER_AUTH_TOKEN_COOKIE,
    LAST_YEAR_COOKIE,

    setCookie,
    getCookie,
    deleteCookie,
    deleteCookies,
}

export default cookie
