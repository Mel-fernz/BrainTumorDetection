import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';



export default function AlertDialog() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();


  // const handleClickOpen = () => {
  //   setOpen(true);
  // }; 

  const handleLogout = () => {
    sessionStorage.removeItem('btd-token');
    navigate('/'); 
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <div className='Logout-container'>    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to Logout?"}
        </DialogTitle> 
        <DialogActions>

          <Button onClick={handleLogout}>Yes</Button>
          
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}