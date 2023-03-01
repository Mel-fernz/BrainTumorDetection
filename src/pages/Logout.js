import React from 'react';
import '../App.css';
import './Logout.css';
import Footer from '../components/Footer';
import LogoutModal from '../components/LogoutModal'
import Navbar from '../components/Navbar';

export default function Logout() {
  return( 
    <>
    <Navbar/>
    <h1 className='Logout'><LogoutModal/></h1>   
    <Footer/>
    </>
  
  )
}
  