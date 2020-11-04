import {combineReducers} from 'redux';
import userDataReducer from "./Reduces/userData";
import classesReducer from "./Reduces/class";
import linkReducer from "./Reduces/link";
import resourceReducer from "./Reduces/resource";
import feedbackReducer from "./Reduces/feedback";
import appReducer from "./Reduces/app";
import aboutReducer from "./Reduces/about";
import creditsReducer from "./Reduces/credits";
import diagramReducer from "./Reduces/diagram";

const reducer = combineReducers({
    userDataReducer,
    classesReducer,
    linkReducer,
    resourceReducer,
    feedbackReducer,
    appReducer,
    aboutReducer,
    creditsReducer,
    diagramReducer,
});

export default reducer;
