export const FETCH_RESOURCES = 10;
export const FETCH_RESOURCES_SUCCESS = 11;
export const FETCH_RESOURCES_FAILURE = 12;

export function fetchResources() {
    return {
        type: FETCH_RESOURCES,
    };
}

export function fetchResourcesSuccess(payload: any) {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        payload: payload,
    };
}

export function fetchResourcesFailure(error: string) {
    return {
        type: FETCH_RESOURCES_FAILURE,
        error: error,
    };
}