import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';

import App from './App';
import calcReducer from './reducers'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(calcReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
