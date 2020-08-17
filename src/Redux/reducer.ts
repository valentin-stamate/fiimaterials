import {combineReducers} from 'redux';
import userDataReducer from "./Reduces/userData";
import classesReducer from "./Reduces/class";
import linkReducer from "./Reduces/link";
import resourceReducer from "./Reduces/resource";
import feedbackReducer from "./Reduces/feedback";

const reducer = combineReducers({
    userDataReducer,
    classesReducer,
    linkReducer,
    resourceReducer,
    feedbackReducer,
});

export default reducer;
