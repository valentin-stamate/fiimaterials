export const FETCH_USER_DATA = 1;
export const FETCH_USER_DATA_SUCCESS = 2;
export const FETCH_USER_DATA_FAILURE = 3;

export function fetchUserData() {
    return {
        type: FETCH_USER_DATA,
    };
}

export function fetchUserDataSuccess(payload: any) {
    return {
        type: FETCH_USER_DATA_SUCCESS,
        payload: payload,
    };
}

export function fetchUserDataFailure(error: string) {
    return {
        type: FETCH_USER_DATA_FAILURE,
        error: error,
    };
}
