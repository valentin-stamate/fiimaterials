import {getCookie, LAST_YEAR_COOKIE, setCookie, USER_AUTH_TOKEN_COOKIE} from "../Store/cookie";
import {
    GET_CLASSES, GET_LINKS, GET_RESOURCES,
    GET_USER_DATA,
    SET_AUTH_STATUS,
    SET_LAST_YEAR, SET_LINKS_LOADING,
    SET_MATERIALS_LOADING, SET_RESOURCE_LOADING,
    SET_USER_DATA_LOADING
} from "../Store/actions";
import store from "../Store/store";
import BackendAPI from "./BackendAPI";
import {BACKEND_URL, GET_CLASSES_URL} from "../Store/globals";


class AppAPI {
    public static instance: AppAPI

    private constructor() {
    }

    static getInstance(): AppAPI {
        if (!AppAPI.instance) {
            AppAPI.instance = new AppAPI();
        }

        return AppAPI.instance
    }

    initializeApp() {
        const userToken = getCookie(USER_AUTH_TOKEN_COOKIE);
        const lastYearSelected = getCookie(LAST_YEAR_COOKIE);

        if (userToken !== undefined && userToken !== null) {
            store.dispatch({
                type: SET_AUTH_STATUS,
                data: true,
            });
        }

        if (lastYearSelected !== undefined && lastYearSelected !== null) {
            store.dispatch({
                type: SET_LAST_YEAR,
                data: parseInt(lastYearSelected),
            });
        }

    }

    getUserData() {

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

    getClasses(year: number) {
        setCookie(LAST_YEAR_COOKIE, year.toString())
        store.dispatch({
            type: SET_LAST_YEAR,
            data: year,
        })

        store.dispatch({
            type: SET_MATERIALS_LOADING,
            data: true,
        })

        let sendRequestObject: any = {
            method: "post",
            url: BACKEND_URL + GET_CLASSES_URL,
            headers: {},
            data: {
                'year': year,
            }
        }

        if (store.getState().userIsAuth) {
            sendRequestObject.headers = {
                'Authorization': 'Token ' + getCookie(USER_AUTH_TOKEN_COOKIE)
            }
        }

        const request = BackendAPI.getInstance().getClasses(sendRequestObject)
        request.then(res => {

            store.dispatch({
                type: GET_CLASSES,
                data: res.data,
            })

            store.dispatch({
                type: SET_MATERIALS_LOADING,
                data: false,
            })

        }).catch(
            // TODO react ui
        )

    }

    setRating(classID: number, rating: number) {

        const request = BackendAPI.getInstance().setRating(classID, rating);

        request.then(result => {

            store.dispatch({
                type: GET_CLASSES,
                data: result.data,
            });

        }).catch(e => {
            // TODO react ui
        });


    }

    getResources() {
        store.dispatch({
            type: SET_RESOURCE_LOADING,
            data: true,
        });

        const request = BackendAPI.getInstance().getResources();

        request.then(res => {

            store.dispatch({
                type: GET_RESOURCES,
                data: res.data,
            })

            store.dispatch({
                type: SET_RESOURCE_LOADING,
                data: false,
            })

        }).catch(e => {
            //  TODO fetching error
        });

    }

    getLinks() {
        store.dispatch({
            type: SET_LINKS_LOADING,
            data: true,
        })

        const request = BackendAPI.getInstance().getLinks();

        request.then(result => {
            store.dispatch({
                type: GET_LINKS,
                data: result.data,
            })

            store.dispatch({
                type: SET_LINKS_LOADING,
                data: false,
            })
        }).catch(e => {
            // TODO react ui
        });
    }

}


export default AppAPI;
