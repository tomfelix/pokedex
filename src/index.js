import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(rootReducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
