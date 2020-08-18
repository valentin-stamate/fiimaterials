import {FETCH_FEEDBACK, FETCH_FEEDBACK_FAILURE, FETCH_FEEDBACK_SUCCESS, SUBMIT_FEEDBACK} from "../Actions/feedback";

const initialState = {
    payload: [{
        name: '',
        implemented: false,
        feedback: '',
        date_created: '',
    }],
    isLoading: false,
    submitLoading: false,
    error: '',
};

export default function feedbackReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_FEEDBACK:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_FEEDBACK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                submitLoading: false,
                payload: action.payload,
            }
        case FETCH_FEEDBACK_FAILURE:
            return {
                ...state,
                isLoading: false,
                submitLoading: false,
                error: action.error,
            }
        case SUBMIT_FEEDBACK:
            return {
                ...state,
                submitLoading: true,
            }
        default:
            return {...state}
    }
};
