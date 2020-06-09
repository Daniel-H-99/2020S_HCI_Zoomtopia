import React, { Component, useEffect, Suspense, useContext, useState} from 'react';
import { Router, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainPage from './pages/MainPage';
import RegisterRoomPage from './pages/RegisterRoomPage';
import RequestManage from './pages/requestComp/RequestManage'
import SampleReq from './pages/requestComp/SampleReq';
import MyPage from './pages/MyPage';
import ItemInfo from './pages/ItemInfo';
import SignInModal from './components/SignInModal';
import Auth from './components/Auth';
import AddAuth from './components/AddAuth';
import Header from './components/Header';
import Main from './components/Main'
const history = createBrowserHistory();


const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
});


function App(props) {
  const [user, setUser] = useState(null);
  const [authed, setAuthed] = useState(false);
  const AuthGate = (props) => authed? props.children : <Redirect to={{
    pathname:"/SignInModal"}}/> 
  return (
    <>
    <Router history={history}>
      <ScrollToTop>
        <Header user={user} authed={authed} setUser={setUser} setAuthed={setAuthed}/>
        <Main>
          <Suspense fallback="loading">
            <Switch>
              <Route exact path="/" component= {() => <MainPage {...props} user={user} authed={authed}/>}/>
              <Route exact path="/Auth" render={props => <Auth {...props} setUser={setUser} setAuthed={setAuthed}/>}/>
              <Route exact path="/AddAuth" component = {AddAuth}/> 
              <Route exact path="/SignInModal" render={props => <SignInModal {...props} show={true}/>}/>            
              <AuthGate>
                <Route exact path="/RegisterRoom" render={props => <RegisterRoomPage {...props} user={user}/>} />
                <Route exact path= "/requestM" component={props => <RequestManage {...props} user={user}/>} />
                <Route exact path= "/testsample" component={props => <SampleReq {...props} user={user}/>} />
                <Route exact path="/MyPage" render={props => <MyPage {...props} user={user}/>} />
                <Route exact path="/ItemInfo" component={props => <ItemInfo {...props} user={user}/>} />
              </AuthGate>
            </Switch>
          </Suspense>
        </Main>
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
