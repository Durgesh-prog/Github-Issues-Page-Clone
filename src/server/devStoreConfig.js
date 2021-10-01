import { createStore, Store, applyMiddleware } from 'redux';
import rootReducer, { RootState } from '../reducers';
import { logger } from '@utils/reduxMiddlewares';

const devStoreConfig = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger),
  );

 /*  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  } */

  return store;
};

export default devStoreConfig;
