import React, { Component, useEffect, Suspense, useContext } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import firebase from 'firebase';
import 'firebase/firestore';


import MainPage from './pages/MainPage';
import RegisterRoomPage from './pages/RegisterRoomPage';



const history = createBrowserHistory();

const firebaseConfig = {
  apiKey: "AIzaSyArkTUMpYK6h2rhMrHRzkH_-ftlKE2ygA8",
  authDomain: "fir-hci-zoomtopia.firebaseapp.com",
  databaseURL: "https://fir-hci-zoomtopia.firebaseio.com",
  projectId: "fir-hci-zoomtopia",
  storageBucket: "fir-hci-zoomtopia.appspot.com",
  messagingSenderId: "821035151780",
  appId: "1:821035151780:web:bef50d7fb2c3665b309131"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

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
            <Route exact path="/" component={MainPage} props={true}/>
            <Route exact path="/RegisterRoom" component={RegisterRoomPage} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
