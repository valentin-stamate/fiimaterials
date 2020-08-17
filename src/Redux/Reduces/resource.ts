import {FETCH_RESOURCES, FETCH_RESOURCES_FAILURE, FETCH_RESOURCES_SUCCESS} from "../Actions/resource";

const initialState = {
    payload: [{
        title: '',
        image_url: '',
        link_url: '',
        description: '',
        tag_list: '',
    }],
    isLoading: false,
    error: '',
};

export default function resourceReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_RESOURCES:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_RESOURCES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_RESOURCES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state};
    }
};