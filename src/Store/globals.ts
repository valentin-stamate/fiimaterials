// "http://localhost:8000/"
// "https://fiimaterialsbackend.herokuapp.com/"

export const BACKEND_URL = "http://localhost:8000/";
export const GET_CLASSES_URL = "api/get/classes/";
export const GET_LINKS_URL = "api/get/links/";
export const LOGIN_URL = "api/login/";
export const SIGNUP_URL = "api/signup/";
export const GET_USER_URL = "api/get/user/";
export const GET_RESOURCES_URL = "api/get/resources/";
export const SET_RATING_URL = "api/post/rating/";

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

const GLOBALS = [
    BACKEND_URL,
    GET_CLASSES_URL,
    GET_LINKS_URL,
    LOGIN_URL,
    SIGNUP_URL,
    EMAIL_REGEX,
    GET_USER_URL,
    GET_RESOURCES_URL,
    SET_RATING_URL,
]

export default GLOBALS;

