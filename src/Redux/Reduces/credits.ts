import {FETCH_CREDITS, FETCH_CREDITS_FAILURE, FETCH_CREDITS_SUCCESS} from "../Actions/credits";


const initialState = {
    payload: [{
        name: '',
        about: '',
        link: '',
        role: '',
        image_link: '',
    }],
    isLoading: false,
    error: '',
};

export default function creditsReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_CREDITS:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_CREDITS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_CREDITS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state}
    }
};
