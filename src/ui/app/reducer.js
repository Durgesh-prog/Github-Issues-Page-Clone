import { clearPageTitle, setPageTitle } from './actions';

const PAGE_DEFAULT_TITLE = 'AfterAcademy | OpenSource Project';


export const defaultState = {
  currentPageTitle: 'Hi',
};

const reducer = (state = defaultState, { type, payload } ) => {
  switch (type) {
    case clearPageTitle.type:
      return { ...defaultState };
    case setPageTitle.type:
      return {
        ...state,
        currentPageTitle: typeof payload === 'string' ? payload : PAGE_DEFAULT_TITLE,
      };
    default:
      return state;
  }
};

export default reducer;
