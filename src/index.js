import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import rootReducer from '@core/reducers';
import App from '@ui/app';
import { logger } from '@utils/reduxMiddlewares';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Saga middleware
const sagaMiddleware = createSagaMiddleware()


// Create Redux store with initial state
const store = createStore(
	rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger,sagaMiddleware)),
);

sagaMiddleware.run(mySaga)

const Routes = () => {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
  );
};

hydrate(<Routes />, document.getElementById('root'));
