import {FETCH_USER_DATA, FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_SUCCESS} from "../Actions/userData"

const initialState = {
    payload: {
        username: '',
        email: '',
        date_joined: '',
        last_login: '',
        is_superuser: false,
        favorite_courses: [
            'data structures',
        ],
    },
    isLoading: false,
    error: '',
};

export default function userDataReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_USER_DATA_SUCCESS:
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
            return {...state};
    }
};