import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../Store/cookie";
import {GET_USER_DATA, SET_AUTH_STATUS, SET_USER_DATA_LOADING} from "../Store/actions";
import store from "../Store/store";
import BackendAPI from "./BackendAPI";


class AppAPI {
    public static instance: AppAPI
    private constructor() {}

    static getInstance(): AppAPI {
        if (!AppAPI.instance) {
            AppAPI.instance = new AppAPI();
        }

        return AppAPI.instance
    }

    setAuthenticationStatus() {
        const token = getCookie(USER_AUTH_TOKEN_COOKIE);

        if (token !== undefined && token !== null) {
            store.dispatch({
                type: SET_AUTH_STATUS,
                data: true,
            })
        }
    }

    getUserData () {

        store.dispatch({
            type: SET_USER_DATA_LOADING,
            data: true,
        })

        const request = BackendAPI.getInstance().getUserData();

        request.then(result => {

            store.dispatch({
                type: GET_USER_DATA,
                data: result.data,
            });

            store.dispatch({
                type: SET_USER_DATA_LOADING,
                data: false,
            });



        })

    }
}


export default AppAPI;
