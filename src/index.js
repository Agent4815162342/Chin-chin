import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
