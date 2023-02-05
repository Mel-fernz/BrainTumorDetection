
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid";
import { Container} from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';





export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const preventDefault = (event) => event.preventDefault();
  



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
      
       <Grid item xs={6} className="email">
            <h4 >EMAIL </h4>
      <TextField id="outlined-basic" label="Email" variant="outlined" /> 
      </Grid>
     

          <Grid item xs={6} className="password">
            <h4>PASSWORD</h4>
          <FormControl sx={{ m: 0, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <br>
          </br>
          <Button variant="contained"  >LOGIN</Button>
         <br>
         </br>
         <Box
      sx={{
    marginLeft: "100px",
      }}
      onClick={preventDefault}
    >
      <Link href="#">Forgot Password?</Link>
     
    </Box>
    <Grid container spacing={1}>

    <Grid item xs={6} className="account">
     <h5>Need an account?</h5>
   
    </Grid>
   
    <Grid item xs={5} className="sign">
     <h5><Link href="#">Sign up</Link></h5>
   
    </Grid>
    </Grid>
   
        </FormControl>
        </Grid>
       
         </Container> 
        
         </Stack>
       
      
  );
}