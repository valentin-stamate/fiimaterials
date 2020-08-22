import {FETCH_ABOUT, FETCH_ABOUT_FAILURE, FETCH_ABOUT_SUCCESS} from "../Actions/about";


const initialState = {
    payload: [{
        title: '',
        body: '',
    }],
    isLoading: false,
    error: '',
};

export default function aboutReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_ABOUT:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_ABOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_ABOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state}
    }
};
