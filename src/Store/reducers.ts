import {GET_CLASSES, GET_LINKS, GET_USER_ADVANCED_DATA, GET_USER_DATA, SET_AUTH_STATUS} from "./actions";


const initialState = {
    classes: [
        {
            id: 0,
            name: "Lorem Ipsum",
            name_short: "",
            average_rating: 0.0,
            credits: 0,
            material_link: "",
            site_link: "",
            site_password: "",
            year: 1,
            semester: 1,
            votes_number: "",
            updated_at: "",
        }
    ],
    links: [
        {
            name: "Link",
            link: "",
            type: "",
        }
    ],

    userIsAuth: false,

    userData: {
        username: "User",
        email: "user@email.com",
    },
    userAdvancedData: {

    },
}

function reducers(state = initialState, action: any) {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                classes: action.data,
            };
        case GET_LINKS:
            return {
                ...state,
                links: action.data,
            };
        case SET_AUTH_STATUS:
            return {
                ...state,
                userIsAuth: action.data,
            }
        case GET_USER_DATA:
            return {
                ...state,
                userData: action.data,
            }
        case GET_USER_ADVANCED_DATA:
            return {
                ...state,
                userAdvancedData: action.data,
            }
        default:
            return state;

    }
}

export default reducers
