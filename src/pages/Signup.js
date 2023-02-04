import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Login from './Login';
import { useState } from 'react';

const Signup=()=>{
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  if (isSignedUp) {
    return <Login />;
  }

return (
<Stack spacing={3} direction="row">
<Container
sx={{
  width: "500px",
  height: "500px",
  marginLeft: "450px",
  padding: "32px 20px",
  top: "64px",
  gap: "64px",
}}
>

<Grid container spacing={1}></Grid>

<Grid item xs={6} className="username">
  <h4>USERNAME</h4>
  <TextField id="outlined-basic" label="Username" variant="outlined" />
  </Grid>

<Grid item xs={6} className="email">
  <h4>EMAIL</h4>
  <TextField id="outlined-basic" label="Email" variant="outlined" />
  </Grid>

  <Grid item xs={6} className="password">
  <h4>PASSWORD</h4>
<TextField
     id="password"
     label="Password"
     type="password"
     variant="outlined"
   />
     </Grid>

     <Grid item xs={6} className="confirmPassword">
  <h4>CONFIRM PASSWORD</h4>
<TextField
     id="confirmPassword"
     label="Confirm Password"
     type="password"
     variant="outlined"
   />
</Grid>

<br></br>
<Button type='submit' variant='contained' color='primary' onclick={handleSignUp}>
Sign Up
</Button>

</Container>
</Stack>
);
}

export default Signup;