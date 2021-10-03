import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { minify as minifyHtml } from 'html-minifier';

import render from './template';
import configureStore from './devStoreConfig';
import theme from '@core/theme';
import rootReducer, { RootState } from '@core/reducers';
import App from '@ui/app';

const isDev = process.env.NODE_ENV === 'development';

export const getProtocol = (req) => {
  let proto = req.connection.encrypted ? 'https' : 'http';
  // only do this if you trust the proxy
  const forwarded = req.headers['x-forwarded-proto'];
  if (forwarded) proto = forwarded.toString();
  return proto.split(/\s*,\s*/)[0];
};

export const buildUrl = (req, endpoint) => {
  const baseUrl = `${getProtocol(req)}://${req.get('host')}/`;
  return `${baseUrl}${endpoint}`;
};


export default function pageBuilder(
  req,
  pageinfo = {
    title: 'Github ',
    description: 'This is the sample project to learn and build Isomorphic React Redux App.',
  },
  currentState = {},
) {

  // create  server styles
  const sheets = new ServerStyleSheets();
  
  currentState.appState = {
      currentPageTitle:'Github Issue'
  };

  const store = isDev
    ? configureStore(currentState)
    : createStore(rootReducer, currentState);

  // Render the component to a string
  const html = renderToString(
     sheets.collect(
      <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
			 <ThemeProvider theme={theme}>
               <App />
			 </ThemeProvider>
          </StaticRouter>
      </Provider>,
	 )
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  const baseUrl = `${getProtocol(req)}://${req.get('host')}`;
  const siteUrl = baseUrl + req.originalUrl;

  const { coverImg, title, description } = pageinfo;

  let htmlPage = render({
    html: html,
	css: css,
    preloadedState: store.getState(),
    siteUrl: siteUrl,
    title: title,
	coverImg: coverImg ? coverImg : `${baseUrl}/favicon.png`,
    description: description,
  });

  try {
    htmlPage = minifyHtml(htmlPage, {
      minifyCSS: true,
      minifyJS: true,
    });
  } catch (e) {
    console.log(e);
  }

  return htmlPage;
}
