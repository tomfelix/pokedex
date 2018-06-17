import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers';
import SearchBar from './containers/SearchBar';
import PokemonView from './containers/PokemonView';
import PokemonDetails from './components/PokemonDetails';
import pokemon_logo from './img/pokemon_logo.png';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          <Route exact path="/" component={SearchBar}/>
          <Route path="/pokemon" component={PokemonDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
