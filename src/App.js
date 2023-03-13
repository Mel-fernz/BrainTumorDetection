import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patients from './pages/Patients/Patients';
import Test from './pages/Test/Test';
import Signup from './pages/Signup/Signup';
import Logout from './pages/Logout/Logout';
import Login from './pages/Login/Login';

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
          <Route path='/login' exact component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/home' component={Home} />
          <Route path='/reports' component={Patients} />
          <Route path='/test' component={Test} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router>
       {/* } */}
    </>
  );
}

export default App;
