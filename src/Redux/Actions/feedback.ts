export const FETCH_FEEDBACK = 13;
export const FETCH_FEEDBACK_SUCCESS = 14;
export const FETCH_FEEDBACK_FAILURE = 15;

export function fetchFeedback() {
    return {
        type: FETCH_FEEDBACK,
    };
}

export function fetchFeedbackSuccess(payload: any) {
    return {
        type: FETCH_FEEDBACK_SUCCESS,
        payload: payload,
    };
}

export function fetchFeedbackFailure(error: string) {
    return {
        type: FETCH_FEEDBACK_FAILURE,
        error: error,
    };
}

