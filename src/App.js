import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewTest from './pages/NewTest';
import Patients from './pages/Patients';

function App() {
  return (
    <Router>
      <Navbar/>      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<NewTest/>}/>
        <Route path="/patientlist" element={<Patients/>}/>
      </Routes>
    </Router>

     
    

  );
}

export default App;
