import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patients from './pages/Patients';
import Test from './pages/Test';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Login from './pages/Login';

function App() {
const [showLogin, setShowLogin]=useState(false);

  useEffect(() => {      
    if (showLogin===false)
    setShowLogin(true);
    else
    setShowLogin(false);
  }, [])
  
  return ( 
    <>
    {/* {showLogin===true?<Login/>: */}
      <Router>
   
        <Switch>
          <Route path='/' exact component={Login} />
          
          <Route path='/signup' component={Signup} />
          <Route path='/home' component={Home} />
          <Route path='/patients' component={Patients} />
          <Route path='/test' component={Test} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router>
       {/* } */}
    </>
  );
}

export default App;
