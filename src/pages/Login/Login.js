import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import './Login.css';


export default function Login() {
    const [login, setLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleSignup=()=>{
      setShowSignup(true);
    };
    if (showSignup) {
      return <Signup />;
    };
  
  
    const handleLogin=()=>{
      setLogin(true);
    };

  return (
    
    <div className='Login'>
     {login===true?<Home/>:

    <div className="text">
       <h1 className='log'>Login</h1>
        <br></br>     
        <label className='email'>EMAIL:</label><br></br>
        <input type="text" className='email' name="EMAIL"></input>
          <br></br>
          <br></br>
        <label className='pin'>PASSWORD:</label><br></br>
        <input type="password" className='pin' name="Password"></input><br></br>
        <Box
              sx={{
            marginLeft: "170px",
              }}
            >
            <Button>Forgot Password?</Button>
            </Box>
        <Box
              sx={{
            marginLeft: "160px",
            
              }}
            >
                <br></br>  
        <Button variant="contained" size="large" onClick={handleLogin}>LOGIN</Button>
        </Box>
        <br></br>
        <Box
              sx={{
            marginLeft: "110px",
          
              }}
            >
        <label className='account'>Need an Account?</label>
        <Button onClick={handleSignup}>SIGN UP</Button>
        {/* <Link to='/signup' onClick={handleSignup}>Sign up</Link> */}
        </Box>
              </div>
        }
          </div>

    );
}