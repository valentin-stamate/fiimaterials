import axios from "axios";
import {BACKEND_URL, GET_USER_URL} from "../Store/globals";
import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../Store/cookie";


/**
 * An "API" class for making backend requests
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

}

export default BackendAPI;
