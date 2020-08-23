export const FETCH_CREDITS = 51;
export const FETCH_CREDITS_SUCCESS = 52;
export const FETCH_CREDITS_FAILURE = 53;

export function fetchCredits() {
    return {
        type: FETCH_CREDITS,
    };
}

export function fetchCreditsSuccess(payload: any) {
    return {
        type: FETCH_CREDITS_SUCCESS,
        payload: payload,
    };
}

export function fetchCreditsFailure(error: string) {
    return {
        type: FETCH_CREDITS_FAILURE,
        error: error,
    };
}
