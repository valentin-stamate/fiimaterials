import {FETCH_LINKS, FETCH_LINKS_FAILURE, FETCH_LINKS_SUCCESS} from "../Actions/link";

const initialState = {
    payload: [{
        name: '',
        link: '',
        type: '',
    }],
    isLoading: false,
    error: '',
};

export default function linkReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_LINKS:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_LINKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_LINKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state};
    }
};