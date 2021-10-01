import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { useStateSelector } from 'reducer';
import {  useSelector } from 'react-redux';
import Landing from '@ui/landing';
import NotFound from '@ui/notfound';
/* import BlogList from '@ui/bloglist';
import BlogPage from '@ui/blogpage';
import WriterMyBlogs from '@ui/writer/myblogs';
import WritingPad from '@ui/writer/writingpad';
import EditorBlogs from '@ui/editor/blogs'; */

export default function Routes() {
 // const { data } = useSelector(({ authState }) => authState);
 // const data = 0;

  /* const isWriter = checkRole(data?.user, Roles.WRITER);
  const isEditor = checkRole(data?.user, Roles.EDITOR); */

  return (
    <Switch>
      {/* PUBLIC CONTENTS */}
      <Route exact path="/" component={Landing} />
      {<Route exact path="/404" component={NotFound} />}


      {/*FALLBACK*/}
      {<Route path="*" component={NotFound} />}
    </Switch>
  );
}
