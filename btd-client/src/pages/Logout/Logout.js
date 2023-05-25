import React from 'react';
import '../../App.css';
import './Logout.css';
import Footer from '../../components/Footer/Footer';
import LogoutModal from '../../components/LogoutModal/LogoutModal'
import Navbar from '../../components/Navbar/Navbar';

export default function Logout() {
  return( 
    <>
    <Navbar/>
    <h1 className='Logout'><LogoutModal/></h1>   
    <Footer/>
    </>
  
  )
}
  