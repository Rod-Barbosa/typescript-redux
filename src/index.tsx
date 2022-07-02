import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);