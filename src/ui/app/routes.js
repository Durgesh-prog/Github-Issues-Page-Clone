import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '@ui/landing';
import NotFound from '@ui/notfound';


export default function Routes() {

  return (
    <Switch>
      {/* Landing Page */}
      <Route exact path="/" component={Landing} />
   
      {/*Not Found*/}
      {<Route path="*" component={NotFound} />}
    </Switch>
  );
}
