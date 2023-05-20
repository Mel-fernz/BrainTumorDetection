import React from 'react';
import '../App.css';
import './Test.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PatientDetails from '../components/PatientDetails'


export default function Test() {
  return(
  <>
  <Navbar/>
  <div className='test'>
  <PatientDetails/> 
  </div>
  
   <Footer />
   </>
   )
}
  