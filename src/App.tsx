import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Store/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./Components/MainPage/MainPage";
import Enter from "./Components/Enter/Enter";


function App() {
    return (
        <Provider store={store}>
            <div className="App">

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/enter" component={Enter} />
                    </Switch>
                </BrowserRouter>

            </div>
        </Provider>
    );
}

// TODO About Project Section

export default App;
