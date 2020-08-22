export const FETCH_ABOUT = 41;
export const FETCH_ABOUT_SUCCESS = 42;
export const FETCH_ABOUT_FAILURE = 43;

export function fetchAbout() {
    return {
        type: FETCH_ABOUT,
    };
}

export function fetchAboutSuccess(payload: any) {
    return {
        type: FETCH_ABOUT_SUCCESS,
        payload: payload,
    };
}

export function fetchAboutFailure(error: string) {
    return {
        type: FETCH_ABOUT_FAILURE,
        error: error,
    };
}
