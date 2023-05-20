import React from 'react';
import '../App.css';
import './Home.css';
import DashboardSection from '../components/DashboardSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <DashboardSection /> 
      <Footer />
    
    </>
  );
}
 
export default Home;
