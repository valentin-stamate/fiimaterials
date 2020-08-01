import {GET_CLASSES, GET_LINKS} from "./actions";


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
    ]
}

function reducers(state = initialState, action: any) {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                classes: action.data,
            };
        case GET_LINKS:
            return state;
        default:
            return state;

    }
}

export default reducers
