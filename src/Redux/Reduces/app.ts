import {SET_LAST_SELECTED_YEAR, SET_USER_AUTH_STATUS} from "../Actions/app";

const initialState = {
    userIsAuth: false,
    lastYearSelected: 1,
};

export default function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_USER_AUTH_STATUS:
            return {
                ...state,
                userIsAuth: action.payload,
            }
        case SET_LAST_SELECTED_YEAR:
            return {
                ...state,
                lastYearSelected: action.payload,
            }
        default:
            return {...state}
    }
};
