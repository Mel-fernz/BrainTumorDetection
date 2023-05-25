import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Signup from "../Signup/Signup";
// import { useParams, useNavigate} from 'react-router-dom';
import PasswordReset from "../PasswordReset/PasswordReset";
// import Home from "./Home";
import '../page.css';
// import Box from "@mui/material/Box";
// import { toast } from "react-toastify";

function Login() {
  const [login, setLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotpass, setForgotpass] = useState("");

  const handleSignup = () => {
    setShowSignup(true);
  };
  if (showSignup) {
    return <Signup />;
  }
 
  const handleForgotPassword = () => {
    setForgotpass(true);
  };
  if (forgotpass) {
    return <PasswordReset/>;
  }
  var loggedUser = {
    // name,
    email,
    password,
  };

  const handleLogin = async () => {
  
    await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Login Success");
          setLogin(true);
          //window.location.href = "/Home";
        } else {
          alert("Invalid Email or Password");
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

 
  return (
    <div className="container">
      <div className="text1">
        <div>
          <h1 className="title">LOGIN</h1>
        </div>

        <form className="form-wrapper">
          <div className="name">
            <div className="email">
              <label className="label">EMAIL:</label>
              <input
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                placeholder="email@email.com"
              ></input>
            </div>
            <div className="password">
              <label className="label">PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>
            <div className="link">
              <Button onClick={handleForgotPassword}>Forgot Password?</Button>
            </div>
            <div>
              <button className="submit" type="button" onClick={handleLogin}>
                LOGIN
              </button>
            </div>
            <div className="oops">
              {/* <Box
                sx={{
                  marginLeft: "90px",
                }}
              > */}
              <label className="account">Need an Account?</label>
              <Button onClick={handleSignup}>SIGN UP</Button>
              {/* </Box> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Signup from './Signup';
// import Home from './Home';
// import './Login.css';

// export default function Login() {
//     const [login, setLogin] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);

//     const handleSignup=()=>{
//       setShowSignup(true);
//     };
//     if (showSignup) {
//       return <Signup />;
//     };

//     const handleLogin=()=>{
//       setLogin(true);
//     };

//   return (

//     <div className='start'>

//     {/* <div className='Login'> */}
//      {login===true?<Home/>:

//     <div className="text">
//        <h1 className='log'>Login</h1>
//         <br></br>
//         <br></br>
//         <label className='email'>EMAIL:</label><br></br>
//         <input type="email" className='email' name="EMAIL"></input>
//           <br></br>
//           <br></br>
//         <label className='pin'>PASSWORD:</label><br></br>
//         <input type="password" className='pin' name="Password"></input><br></br>
//         <Box
//               sx={{
//             marginLeft: "170px",

//               }}
//             >
//             <Button>Forgot Password?</Button>
//             </Box>
//         <Box
//               sx={{
//             marginLeft: "160px",

//               }}
//             >
//                 <br></br>
//         <Button variant="contained" size="large" onClick={handleLogin}>LOGIN</Button>
//         </Box>
//         <br></br>
//         <Box
//               sx={{
//             marginLeft: "110px",

//               }}
//             >
//         <label className='account'>Need an Account?</label>
//         <Button onClick={handleSignup}>SIGN UP</Button>
//         {/* <Link to='/signup' onClick={handleSignup}>Sign up</Link> */}
//         </Box>
//               </div>

//         }

/* </div> */

//           </div>

//     );
// }
