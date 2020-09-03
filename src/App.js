import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Create from './components/Create';
import Login from './components/Auth/login/Login';
import ForgotPassword from './components/ForgotPassword';
import Search from './components/Search';
import AllLinks from './components/AllLinks';
import InDetail from './components/InDetail';
import Header from './components/header/Header';
import useAuth from './components/Auth/login/useAuth';
import firebase, { FirebaseContext } from '../src/components/firebase';

 //installed npm i react-router-dom --save
//created routing to components, where home path is redirected to the first page of '/new'
function App() {
  const user = useAuth();
   
  return (
     <BrowserRouter>
     <FirebaseContext.Provider value={{ user, firebase }}>
    <div className='app-container'>
      <Header />
      <div className='routing-container'>
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
      </div>
    </div>
    </FirebaseContext.Provider>
   </BrowserRouter>
  );
}

export default App;
