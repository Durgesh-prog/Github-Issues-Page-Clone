import { createStore, Store, applyMiddleware } from 'redux';
import rootReducer, { RootState } from '../reducers';
import { logger } from '@utils/reduxMiddlewares';



const devStoreConfig = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger),
  );
  
  

  return store;
};


  
export default devStoreConfig;
