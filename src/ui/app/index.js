import { hot } from 'react-hot-loader/root';
import React, { Fragment, useEffect, useRef } from 'react';
import Routes from './routes';
import { useRouteMatch } from "react-router-dom";
import {removeAppLoader,setPageTitle,scrollPageToTop} from '@utils/pageUtils';
import { useDispatch } from 'react-redux';

//import Header from '@ui/header';
//import Footer from '@ui/footer';

import { useStateSelector } from '@core/reducers';
import { useSelector } from 'react-redux';

function App() {
 
  const dispatch = useDispatch();
  const match = useRouteMatch();
 
  const { currentPageTitle } = useSelector(({ appState }) => appState);
  
  useEffect(() => {
    removeAppLoader();
  }, []);

  useEffect(() => {
    if (currentPageTitle) setPageTitle(currentPageTitle);
  }, [currentPageTitle]);

  useEffect(() => {
    scrollPageToTop();
  }, [match]);


  return (
    <Fragment>
      <div >  
        <div >
          <Routes />
        </div>
      </div>
    </Fragment>
  );
}

export default hot(App);
