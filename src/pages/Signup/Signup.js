import './Signup.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Login from '../Login/Login';

const Signup=()=>{
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

    return (
      <>
      {isSignedUp===true?<Login/>: 
      <div className="text">
        
       <h1 className='sign'>SIGNUP</h1>
        <br></br>     

        <label className='Username'>USERNAME:</label><br></br>
        <input type="text" className='Username' name="USERNAME"></input>
          <br></br>
          <br></br>
          <label className='email'>EMAIL:</label><br></br>
        <input type="text" className='email' name="EMAIL"></input>
        <br></br>
          <br></br>
        <label className='pin'>PASSWORD:</label><br></br>
        <input type="password" className='pin' name="Password"></input><br></br>
        <br></br>
        <label className='pin'>CONFIRM PASSWORD:</label><br></br>
        <input type="password" className='pin' name="Password"></input><br></br>
        <Box
              sx={{
            marginLeft: "160px",
            
              }}
            >
                <br></br> 
                
        <Button variant="contained" size="large" onClick={handleSignUp}>SIGNUP</Button>
        </Box>
      </div>
        }
      </>
      
    
    );
  } 

  export default Signup;


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
