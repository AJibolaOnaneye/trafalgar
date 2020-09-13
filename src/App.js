import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    </Router>
     
      
    </div>
  );
}

export default App;
