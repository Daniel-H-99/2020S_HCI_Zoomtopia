import React, { Component, useEffect, Suspense, useContext } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import MainPage from './pages/MainPage';
import requestPage from './pages/requestComp/requestmanage' ;


const history = createBrowserHistory();

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
});


function App() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={requestPage} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
