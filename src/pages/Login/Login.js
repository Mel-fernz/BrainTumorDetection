import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import './Login.css';
import { Link } from 'react-router-dom';
import PasswordReset from '../PasswordReset/PasswordReset';
// import EnterOtp from '../EnterOtp/EnterOtp';



export default function Login() {
    const [login, setLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showPasswordReset, setShowPasswordReset] = useState(false);

    const handleSignup=()=>{
      setShowSignup(true);
    };
    if (showSignup) {
      return <Signup />;
    };  

    const handleforgotpass=()=>{
      setShowPasswordReset(true);
    };
    if (showPasswordReset) {
      return <PasswordReset/>;
    }; 
  
    const handleLogin=()=>{
      setLogin(true);
    };

  return (
    
    <span className='login'>
      <>
     {login===true?<Home/>:

    <div className="text">
      {/* BTD
       <i className="fa fa-solid fa-brain"/> */}
       <h1 className='log'>Login</h1>
        <br></br>     
        <label className='email'>EMAIL:</label><br></br>
        <input type="email" className='email' name="EMAIL"></input>
          <br></br>
          <br></br>
        <label className='pin'>PASSWORD:</label><br></br>
        <input type="password" className='pin' name="Password"></input><br></br>
        <Box
              sx={{
            marginLeft: "170px",
              }}
            >
              <Link to="/password-reset" style={{textDecoration:'none'}}>
                <Button onClick={handleforgotpass}> Forgot Password? </Button>
              </Link>
        </Box>
        <Box
              sx={{
            marginLeft: "160px",
              }}
            >
                <br></br>  
         <Link to="/home" style={{textDecoration:'none'}}> 
        <Button variant="contained" size="large" onClick={handleLogin}>LOGIN</Button>
        </Link> 
        </Box>
        <br></br>
        <Box
              sx={{
            marginLeft: "110px",
          
              }}
            >
        <label className='account'>Need an Account?</label>
        <Link to="/signup" style={{textDecoration:'none'}}>
          <Button onClick={handleSignup}>SIGN UP</Button>
        </Link>
        {/* <Link to='/signup' onClick={handleSignup}>Sign up</Link> */}
        </Box>
              </div>
        }
        </>
          </span>

    );
}