
export function actionCreator(actionType) {

  const actionGenerator = (data = {}) => ({
    type: actionType,
    payload: data,
  });

  const actionWrapper = {
    type: actionType,
    action: actionGenerator,
  };

  return actionWrapper;
}

export function networkActionsCreator(actionType) {
  const requesting = actionType + '_REQUESTING';
  const success = actionType + '_SUCCESS';
  const failure = actionType + '_FAILURE';

  const requestingActionGenerator = () => ({
    type: requesting,
  });

  const successActionGenerator = (response) => ({
    type: success,
    payload: response,
  });

  const failureActionGenerator = (response) => ({
    type: failure,
    payload: response,
  });

  
  const actionWrappers = {
    requesting: {
      type: requesting,
      action: requestingActionGenerator,
    },
    success: {
      type: success,
      action: successActionGenerator,
    },
    failure: {
      type: failure,
      action: failureActionGenerator,
    },
  };

  return actionWrappers;
}
