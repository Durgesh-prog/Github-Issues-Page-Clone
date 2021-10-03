import { CLEAR_PAGE_TITLE, SET_PAGE_TITLE } from './actions';

export const defaultState = {
  currentPageTitle: 'Github',
};

const reducer = (state = defaultState, { type, payload } ) => {
  switch (type) {
    case CLEAR_PAGE_TITLE:
      return { ...defaultState };
    case SET_PAGE_TITLE:
      return {
        ...state,
        currentPageTitle: typeof payload === 'string' ? payload : defaultState.currentPageTitle,
      };
    default:
      return state;
  }
};

export default reducer;
