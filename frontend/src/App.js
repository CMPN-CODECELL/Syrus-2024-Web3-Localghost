import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';
import { BrowserRouter as Router,Routes, Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import FormPage from './components/FormPage';

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 to-teal-50">
      {/* <Navbar />
      <h1 className="text-3xl font-bold text-center">
        Welcome to Vaxchain
      </h1> */}
      {/* <BrowserRouter> 
      <Routes>
        <Route exact path="/" component={Navbar} />
        <Route path="/form" component={FormComponent} />
      </Routes>
      </BrowserRouter> */}
   
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/form" element={<FormPage/>} />
        </Routes>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
