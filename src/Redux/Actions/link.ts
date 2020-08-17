export const FETCH_LINKS = 7;
export const FETCH_LINKS_SUCCESS = 8;
export const FETCH_LINKS_FAILURE = 9;

export function fetchLinks() {
    return {
        type: FETCH_LINKS,
    }
}

export function fetchLinksSuccess(payload: any) {
    return {
        type: FETCH_LINKS_SUCCESS,
        payload: payload,
    }
}

export function fetchLinksFailure(error: string) {
    return {
        type: FETCH_LINKS_FAILURE,
        error: error,
    }
}