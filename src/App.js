import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patients from './pages/Patients';
import Test from './pages/Test';
import Logout from './pages/Logout';

function App() {
  return ( 
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/patients' component={Patients} />
          <Route path='/test' component={Test} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router> 
    </>
  );
}

export default App;
