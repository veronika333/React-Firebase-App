import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Create from './components/Create';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Search from './components/Search';
import AllLinks from './components/AllLinks';
import InDetail from './components/InDetail';

function App() {
  return (
    //installed npm i react-router-dom --save
    //created routing to components, where home path is redirected to the first page of '/new'
   <BrowserRouter>
   <Switch>
     <Route exact path='/' render={() => <Redirect to='/new/1'/>} />
     <Route path='/create' component={Create} />
     <Route path='/login' component={Login} />
     <Route path='/forgotpassword' component={ForgotPassword} />
     <Route path='/search' component={Search} />
     <Route path='/popular' component={AllLinks} />
     <Route path='/new/:page' component={AllLinks} />
     <Route parh='/link/:linkId' component={InDetail} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
