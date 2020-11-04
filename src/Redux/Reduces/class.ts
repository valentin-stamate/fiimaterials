import {FETCH_CLASSES, FETCH_CLASSES_SUCCESS} from "../Actions/class";
import {FETCH_USER_DATA_FAILURE} from "../Actions/userData";

const initialState = {
    payload: [{
        id: 0,
        name: '',
        name_short: '',
        average_rating: 0.0,
        credits: 0,
        material_link: '',
        site_link: '',
        site_password: '',
        year: 1,
        about: '',
        semester: 1,
        votes_number: '',
        updated_at: '',
        user_rating: 0.0,
    }],
    isLoading: false,
    error: '',
};

export default function classReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_CLASSES:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state}
    }
};
