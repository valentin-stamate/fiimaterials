import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Store/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./Components/MainPage/MainPage";
import Enter from "./Components/Enter/Enter";
import Feedback from "./Components/Feedback/Feedback";


function App() {
    return (
        <Provider store={store}>
            <div className="App">

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/enter" component={Enter} />
                        <Route path="/feedback" component={Feedback} />
                    </Switch>
                </BrowserRouter>

            </div>
        </Provider>
    );
}

// TODO About Project Section
// TODO what if the cookie uid is different than uid in the database?
// TODO ! refactor the whole app with good practices: css flexbox & class components

export default App;
