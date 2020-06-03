import React, { Component, useEffect, Suspense, useContext } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import MainPage from './pages/MainPage';
import RegisterRoomPage from './pages/RegisterRoomPage';


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
            <Route exact path="/" component={MainPage} />
            <Route exact path="/RegisterRoom" component={RegisterRoomPage} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
