import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

  const [showHome, setShowHome] = useState(false);
  const navigate = useNavigate();
  

  const handleHome = () => {
    setShowHome(true);
  };
  if (showHome) {
    navigate("/home");
  }
  return (
    <div className="error-pg">
      <div className="err-box">
      <h1>404</h1>
      <h3>Page Not Found!</h3>
      <h6>The page you are looking for might have been removed, had its  </h6><h6>name changed or is temporarily unavailable</h6>
      <button onClick={handleHome}>BACK TO HOME PAGE</button>
    </div>
    </div>
    
  )
}

export default ErrorPage