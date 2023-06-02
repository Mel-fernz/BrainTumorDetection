import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <p>The page you are looking for might have been removed <br />had its name changed <br />or is temporarily unavailable</p>
      <button onClick={handleHome}>HOMEPAGE</button>
    </div>
  )
}

export default ErrorPage