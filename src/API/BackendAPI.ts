import axios from "axios";
import {
    BACKEND_URL,
    GET_LINKS_URL,
    GET_RESOURCES_URL,
    GET_USER_URL, LOGIN_URL, POST_VERIFICATION_TOKEN,
    SET_RATING_URL,
    SIGNUP_URL
} from "../Store/globals";
import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../Store/cookie";


/**
 * An "API" class for making only backend requests
 * Each method returns a promise when the request is finished
 * This doesn't have access to redux store
 * Hope that is a good pattern
 */

// TODO make a diagram with app flow and put it into about section
class BackendAPI {
    public static instance: BackendAPI

    private constructor() {}

    public static getInstance() {
        if (!BackendAPI.instance) {
            BackendAPI.instance = new BackendAPI();
        }
        return BackendAPI.instance;
    }

    getUserData() {
        const userToken = getCookie(USER_AUTH_TOKEN_COOKIE);

        return axios({
            method: 'post',
            url: BACKEND_URL + GET_USER_URL,
            headers: {
                'Authorization': 'Token ' + userToken,
            },
        });
    }

    getClasses(sendRequestObject: any) {
        return axios(sendRequestObject);
    }

    setRating(classID: number, rating: number) {
        return axios({
            method: 'POST',
            url: BACKEND_URL + SET_RATING_URL,
            headers: {
                Authorization: "Token " + getCookie(USER_AUTH_TOKEN_COOKIE),
            },
            data: {
                class_id: classID,
                rating: rating,
            }
        });
    }

    getResources() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_RESOURCES_URL,
        })
    }

    getLinks() {
        return axios({
            method: "get",
            url: BACKEND_URL + GET_LINKS_URL,
        });
    }

    signup(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + SIGNUP_URL,
            data: formData,
        });
    }

    sentVerificationToken(token: string) {
        return axios({
            method: 'post',
            url: BACKEND_URL + POST_VERIFICATION_TOKEN,
            data: {
                token: token,
            }
        });
    }

    login(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + LOGIN_URL,
            data: formData,
        });
    }

}

export default BackendAPI;
