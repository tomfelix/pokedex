import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers';
import SearchBar from './containers/SearchBar';
import PokemonDetails from './containers/PokemonDetails';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          <Route exact path="/" component={SearchBar}/>
          <Route path="/:name" match="name" component={PokemonDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
