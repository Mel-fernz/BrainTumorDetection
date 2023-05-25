import React, { useState } from "react";
// import Login from "./Login";
import '../page.css'
import PWDRequisite from "../../components/PWDRequisite";
import { useHistory } from "react-router-dom";

const Signup = () => {
  // const handleFormSubmit = (event) =>{
  //     event.preventDefault();
  // };
  // const [isSignedUp, setIsSignedUp] = useState(false);
  // const [name, setName] = useState("null");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigation = useHistory();
  // const sendToBackend = async ()=>{

  //   await fetch ("http://192.168.0.173:3001/api/login",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin" : "*"
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       password: password
  //     }),
  //     })

  // }

  var loggedUser = {
    // name,
    email,
    password,
  };

  //password strength
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const handleOnFocus = (e) => {
    setPWDRequisite(true);
  };

  const handleOnBlur = (e) => {
    setPWDRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleSignUp = async () => {
    // let users =
    //   localStorage.getItem("Users") == null
    //     ? []
    //     : JSON.parse(localStorage.getItem("Users"));
    // console.log(users);
    // if (users.length === 0) {
    //   alert("Invalid Email or Password");
    // } else {
    //   let userindex = users.findIndex(
    //     (x) => x.email === email && x.password === password
    //   );

    //   if (userindex === -1) {
    //     alert.error("Invalid Email or Password");
    //   } else {
    //     localStorage.setItem("name", JSON.stringify(users[userindex].name));
    //     localStorage.setItem(
    //       "password",
    //       JSON.stringify(users[userindex].password)
    //     );
    //     alert.success("Login Success");
    //     localStorage.setItem("loggedInDetails", JSON.stringify(loggedUser));
    //   }
    // }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/register", requestOptions)
      .then((response) => {
        if (response.status === 201) {
          alert.success("Login Success");
        } else {
          alert.error("Invalid Email or Password");
        }
        return response.text();
      })
      .then((result) => console.log(result))
      .then(() => {
        navigation.push("/login");
      })

      .catch((error) => console.log("error", error));

    // setIsSignedUp(true);
  };
  return (
    <div className="container">
      <div className="text1">
        <div>
          <h1 className="title">SIGNUP</h1>
        </div>

        <form className="form-wrapper">
          <div className="name">
            {/* <label className="label">USERNAME:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="exampleInputName"
                placeholder="name"
              ></input> */}
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
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div>

            <div className="password1">
              <label className="label">CONFIRM PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div>
         

            <div>
              <button className="submit" onClick={handleSignUp}>
                SIGNUP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import Login from "./Login";
// import "./page.css";
// import PWDRequisite from "./PWDRequisite";

// const Signup = () => {
// const handleFormSubmit = (event) =>{
//     event.preventDefault();
// };
// const [isSignedUp, setIsSignedUp] = useState(false);
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [cpassword, setCPassword] = useState("");

// var loggedUser = {
//   name,
//   email,
//   password,
// };

//password strength
// const [pwdRequisite, setPWDRequisite] = useState(false);
// const [checks, setChecks] = useState({
//   capsLetterCheck: false,
//   numberCheck: false,
//   pwdLengthCheck: false,
//   specialCharCheck: false,
// });

// const handleOnFocus = (e) => {
//   setPWDRequisite(true);
// };

// const handleOnBlur = (e) => {
//   setPWDRequisite(false);
// };

// const handleOnKeyUp = (e) => {
//   const { value } = e.target;
//   const capsLetterCheck = /[A-Z]/.test(value);
//   const numberCheck = /[0-9]/.test(value);
//   const pwdLengthCheck = value.length >= 8;
//   const specialCharCheck = /[!@#$%^&*]/.test(value);
//   setChecks({
//     capsLetterCheck,
//     numberCheck,
//     pwdLengthCheck,
//     specialCharCheck,
//   });
// };

// const handleSignUp = () => {
//   let users =
//     localStorage.getItem("Users") == null
//       ? []
//       : JSON.parse(localStorage.getItem("Users"));
//   console.log(users);
//   if (users.length === 0) {
//     alert("Invalid Email or Password");
//   } else {
//     let userindex = users.findIndex(
//       (x) => x.email === email && x.password === password
//     );

//     if (userindex === -1) {
//       alert.error("Invalid Email or Password");
//     } else {
//       localStorage.setItem("name", JSON.stringify(users[userindex].name));
//       localStorage.setItem(
//         "password",
//         JSON.stringify(users[userindex].password)
//       );
//       alert.success("Login Success");
//       localStorage.setItem("loggedInDetails", JSON.stringify(loggedUser));
//     }
//   }

//   setIsSignedUp(true);
// };
// return (
//   <div className="container">
//     {isSignedUp === true ? (
//       <Login />
//     ) : (
//       <div className="text1">
//         <div>
//           <h1 className="title">SIGNUP</h1>
//         </div>

//         <form className="form-wrapper">
//           <div className="name">
/* <label className="label">USERNAME:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="exampleInputName"
                placeholder="name"
              ></input> */
/* <div className="email">
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
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleOnKeyUp}
                  id="exampleInputPassword1"
                  placeholder="password"
                ></input>
              </div>

              <div>
                {pwdRequisite ? (
                  <PWDRequisite
                    capsLetterFlag={
                      checks.capsLetterCheck ? "valid" : "invalid"
                    }
                    numberFlag={checks.numberCheck ? "valid" : "invalid"}
                    pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                    specialCharFlag={
                      checks.specialCharCheck ? "valid" : "invalid"
                    }
                  />
                ) : null}
              </div>

              <div className="password">
                <label className="label">CONFIRM PASSWORD:</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleOnKeyUp}
                  id="exampleInputPassword1"
                  placeholder="password"
                ></input>
              </div>

              <div>
                {pwdRequisite ? (
                  <PWDRequisite
                    capsLetterFlag={
                      checks.capsLetterCheck ? "valid" : "invalid"
                    }
                    numberFlag={checks.numberCheck ? "valid" : "invalid"}
                    pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                    specialCharFlag={
                      checks.specialCharCheck ? "valid" : "invalid"
                    }
                  />
                ) : null}
              </div>
              <br></br>
             

              <div>
                <button className="submit" onClick={handleSignUp}>
                  SIGNUP
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup; */

// import './Signup.css';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import React, { useState } from 'react';
// import Login from './Login';

// const Signup=()=>{
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleSignUp = () => {
//     setIsSignedUp(true);
//   };

//     return (
//       <div className='run'>

//       <>
//       {isSignedUp===true?<Login/>:
//       <div className="text1">

//        <h1 className='sign'>SIGNUP</h1>
//         <br></br>

//         <label className='Username'>USERNAME:</label><br></br>
//         <input type="text" className='Username' name="USERNAME"></input>
//           <br></br>
//           <br></br>
//           <label className='email1'>EMAIL:</label><br></br>
//         <input type="text" className='email' name="EMAIL"></input>
//         <br></br>
//           <br></br>
//         <label className='pin1'>PASSWORD:</label><br></br>
//         <input type="password" className='pin' name="Password"></input><br></br>
//         <br></br>
//         <label className='pin1'>CONFIRM PASSWORD:</label><br></br>
//         <input type="password" className='pin' name="Password"></input><br></br>
//         <Box
//               sx={{
//             marginLeft: "160px",

//               }}
//             >
//                 <br></br>

//         <Button variant="contained" size="large"  onClick={handleSignUp}>SIGNUP</Button>
//         </Box>
//       </div>
//         }
//       </>

//       </div>

//     );
//   }

//   export default Signup;

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Login from './Login';
// import React, { useState } from 'react';

// const Signup=()=>{
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleSignUp = () => {
//     setIsSignedUp(true);
//   };

//   // if (isSignedUp) {
//   //   return <Login />;
//   // }

// return (
//   <>
// {isSignedUp===true?<Login/>:
// <Stack spacing={3} direction="row">
// <Container
// sx={{
//   width: "500px",
//   height: "500px",
//   marginLeft: "450px",
//   padding: "32px 20px",
//   top: "64px",
//   gap: "64px",
// }}
// >

// <Grid container spacing={1}></Grid>

// <Grid item xs={6} className="username">
//   <h4>USERNAME</h4>
//   <TextField id="outlined-basic" label="Username" variant="outlined" />
//   </Grid>

// <Grid item xs={6} className="email">
//   <h4>EMAIL</h4>
//   <TextField id="outlined-basic" label="Email" variant="outlined" />
//   </Grid>

//   <Grid item xs={6} className="password">
//   <h4>PASSWORD</h4>
// <TextField
//      id="password"
//      label="Password"
//      type="password"
//      variant="outlined"
//    />
//      </Grid>

//      <Grid item xs={6} className="confirmPassword">
//   <h4>CONFIRM PASSWORD</h4>
// <TextField
//      id="confirmPassword"
//      label="Confirm Password"
//      type="password"
//      variant="outlined"
//    />
// </Grid>

// <br></br>

// <Button type='submit' variant='contained' color='primary' onClick={handleSignUp}>
// Sign Up
// </Button>

// </Container>
// </Stack>};
// </>
// );

// }

// export default Signup;
