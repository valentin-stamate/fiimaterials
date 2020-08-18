import {deleteCookies, getCookie, LAST_YEAR_COOKIE, setCookie, USER_AUTH_TOKEN_COOKIE} from "../Global/cookie";
import store from "../Redux/store";
import BackendAPI from "./BackendAPI";
import {BACKEND_URL, GET_CLASSES_URL} from "../Global/globals";
import {fetchUserData, fetchUserDataSuccess} from "../Redux/Actions/userData";
import {fetchClasses, fetchClassesSuccess} from "../Redux/Actions/class";
import {fetchResources, fetchResourcesSuccess} from "../Redux/Actions/resource";
import {fetchLinks, fetchLinksSuccess} from "../Redux/Actions/link";
import {fetchFeedback, fetchFeedbackSuccess, submitFeedback} from "../Redux/Actions/feedback";
import {setLastSelectedYear, setUserAuthStatus} from "../Redux/Actions/app";


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
        const userAuth = userToken !== undefined && userToken !== null;

        store.dispatch(setUserAuthStatus(userAuth));

        const lastYearSelected = getCookie(LAST_YEAR_COOKIE);
        if (lastYearSelected !== undefined && lastYearSelected !== null) {
            const lastYear = parseInt(lastYearSelected);
            store.dispatch(setLastSelectedYear(lastYear));
        }

        // API CALLS
        if (store.getState().appReducer.userIsAuth) {
            AppAPI.getInstance().getUserData();
        }
        AppAPI.getInstance().getFeedback();
    }

    deleteCookies() {
        deleteCookies();
    }

    getUserData() {
        store.dispatch(fetchUserData());

        const request = BackendAPI.getInstance().getUserData();

        request.then(result => {
            store.dispatch(fetchUserDataSuccess(result.data));
        })
        // TODO error
    }

    getClasses(year: number) {
        setCookie(LAST_YEAR_COOKIE, year.toString())
        store.dispatch(setLastSelectedYear(year));

        store.dispatch(fetchClasses());

        let sendRequestObject: any = {
            method: "post",
            url: BACKEND_URL + GET_CLASSES_URL,
            headers: {},
            data: {
                'year': year,
            }
        }

        if (store.getState().appReducer.userIsAuth) {
            sendRequestObject.headers = {
                'Authorization': 'Token ' + getCookie(USER_AUTH_TOKEN_COOKIE)
            }
        }

        const request = BackendAPI.getInstance().getClasses(sendRequestObject)

        request.then(result => {
            store.dispatch(fetchClassesSuccess(result.data));
        })
    }

    setRating(classID: number, rating: number) {
        const request = BackendAPI.getInstance().setRating(classID, rating);

        request.then(result => {
            store.dispatch(fetchClassesSuccess(result.data));
        })
    }

    getResources() {
        store.dispatch(fetchResources());

        const request = BackendAPI.getInstance().getResources();

        request.then(result => {
            store.dispatch(fetchResourcesSuccess(result.data));
        })
    }

    getLinks() {
        store.dispatch(fetchLinks());

        const request = BackendAPI.getInstance().getLinks();

        request.then(result => {
            store.dispatch(fetchLinksSuccess(result.data));
        })
    }

    getFeedback() {
        store.dispatch(fetchFeedback());

        const request = BackendAPI.getInstance().getFeedback();

        request.then(result => {
            store.dispatch(fetchFeedbackSuccess(result.data));
        });
    }

    submitFeedback(formData: any) {
        const request = BackendAPI.getInstance().submitFeedback(formData);
        store.dispatch(submitFeedback());

        request.then(result => {
            store.dispatch(fetchFeedbackSuccess(result.data));
        });
    }

    signup(formData: any) {
        return BackendAPI.getInstance().signup(formData);
    }

    sendVerificationToken(token: string) {
        return BackendAPI.getInstance().sentVerificationToken(token);
    }

    login(formData: any) {
        return BackendAPI.getInstance().login(formData);
    }

}


export default AppAPI;
