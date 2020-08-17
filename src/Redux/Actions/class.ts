export const FETCH_CLASSES = 4;
export const FETCH_CLASSES_SUCCESS = 5;
export const FETCH_CLASSES_FAILURE = 6;

export function fetchClasses() {
    return {
        type: FETCH_CLASSES,
    }
}

export function fetchClassesSuccess(payload: any) {
    return {
        type: FETCH_CLASSES_SUCCESS,
        payload: payload,
    }
}

export function fetchClassesFailure(error: string) {
    return {
        type: FETCH_CLASSES_FAILURE,
        error: error,
    }
}
