import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);




//render(
  //<Provider store={store}>
  //<div>
  //<DevTools />
  //<h1>Inicjalizacja projektu</h1>
  //</div>
//</Provider>,
  //  document.getElementById('root'));

//store.dispatch(getCountries());
