import React ,{Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Components/Index';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';





class App extends Component {
  render(){
    return (
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }

  }


export default App;
