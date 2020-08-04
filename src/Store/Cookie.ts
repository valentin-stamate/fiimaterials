export const USER_AUTH_TOKEN_COOKIE = 'user_id';
export const LAST_YEAR_COOKIE = 'last_year';

export function setCookie(key: string, value: string) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

export function getCookie(key: string) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

export function deleteCookie(key: string) {
    document.cookie = key + "=" + "" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
}

const Cookie = {
    USER_AUTH_TOKEN_COOKIE,
    LAST_YEAR_COOKIE,

    setCookie,
    getCookie,
    deleteCookie,
}

export default Cookie
