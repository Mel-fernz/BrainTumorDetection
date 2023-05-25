import React from 'react';
import '../../App.css';
import './Home.css';
import '../../components/DashboardSection/DashboardSection.css';

import DashboardSection from '../../components/DashboardSection/DashboardSection';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

// import Navbar from '/src/components/Navbar/Navbar';
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
