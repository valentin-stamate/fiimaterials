import {FETCH_FEEDBACK, FETCH_FEEDBACK_FAILURE, FETCH_FEEDBACK_SUCCESS} from "../Actions/feedback";

const initialState = {
    payload: [{
        name: '',
        implemented: false,
        feedback: '',
        date_created: '',
    }],
    isLoading: false,
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
                payload: action.payload,
            }
        case FETCH_FEEDBACK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state}
    }
};
