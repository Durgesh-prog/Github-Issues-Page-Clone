/**
 * Logs all actions and states after they are dispatched.
 */
//const LOGGING = process.env.NODE_ENV !== 'production' && process.env.LOGGING == 'true';

let LOGGING = true;

export const logger = (store) => (next) => (action) => {
  if (LOGGING) {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};
