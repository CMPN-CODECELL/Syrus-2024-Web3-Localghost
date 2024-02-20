import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';
import { BrowserRouter as Router,Routes, Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import FormPage from './components/FormPage';
import QRPage from './components/QRPage';
import AboutPage from './components/AboutPage';
import GrievanceForm from './components/Feedback';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 to-teal-50">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/userdashboard" element={<UserPage/>} />
          <Route path="/form" element={<FormPage/>} />
          <Route path="/scanqr" element={<QRPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/userdashboard" element={<UserPage/>} />
          <Route path="/feedback" element={<GrievanceForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
