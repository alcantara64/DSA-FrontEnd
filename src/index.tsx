import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import'../src/assets/css/bootstrap-dropdown.css';
import '../src/assets/css/em-unity-1.3.0.min.css';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configstore from './store/configurestore';

const store = configstore()

ReactDOM.render(<Provider store={store}><HashRouter basename="/"><App /></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
