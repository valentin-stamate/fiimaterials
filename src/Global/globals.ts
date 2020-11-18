// "http://localhost:8000/"
// "https://fiimaterialsbackend.herokuapp.com/"

export const BACKEND_URL = "http://localhost:8000/";
export const GET_CLASSES_URL = "api/get/classes/";
export const GET_LINKS_URL = "api/get/links/";
export const LOGIN_URL = "api/login/";
export const SIGNUP_URL = "api/signup/";
export const GET_USER_URL = "api/get/user-data/";
export const GET_RESOURCES_URL = "api/get/resources/";
export const SET_RATING_URL = "api/post/rating/";
export const GET_FEEDBACK_URL = 'api/get/feedback/';
export const POST_FEEDBACK_URL = 'api/post/feedback/';
export const POST_VERIFICATION_TOKEN = 'api/verify-token/';
export const DELETE_RATING = 'api/delete-rating/';
export const UPDATE_PROFILE_URL = 'api/update-profile/';
export const SEND_TO_RECOVER = 'api/recover-password/';
export const GET_ABOUT = 'api/get/about/';
export const GET_CREDITS = 'api/get/credits/';
export const GET_DIAGRAM = 'api/get/diagram/';

export const EMAIL_REGEX: RegExp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

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
    GET_FEEDBACK_URL,
    POST_FEEDBACK_URL,
    UPDATE_PROFILE_URL,
    SEND_TO_RECOVER,
    GET_ABOUT,
    GET_CREDITS,
    GET_DIAGRAM,
]

export default GLOBALS;

