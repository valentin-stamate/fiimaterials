export const SET_USER_AUTH_STATUS = 16
export const SET_LAST_SELECTED_YEAR = 17;

export function setUserAuthStatus(status: boolean) {
    return {
        type: SET_USER_AUTH_STATUS,
        payload: status,
    };
}

export function setLastSelectedYear(year: number) {
    return {
        type: SET_LAST_SELECTED_YEAR,
        payload: year,
    };
}
