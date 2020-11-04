import {FETCH_DIAGRAM, FETCH_DIAGRAM_FAILURE, FETCH_DIAGRAM_SUCCESS} from "../Actions/diagram";


const initialState = {
    payload: {
        name: '',
        content: '',
    },
    isLoading: false,
    error: '',
};

export default function diagramReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_DIAGRAM:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_DIAGRAM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case FETCH_DIAGRAM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return {...state}
    }
};
