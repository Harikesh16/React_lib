//import logo from './logo.svg';
import React from "react";
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import Error from './Error.js';


const App = () =>{
  //let myvariable = 134;
  return (
     <Routes>
      <Route path = '/' element = {<About/>} />
      <Route path ='/About' element ={<About/>} />
      <Route path ='/contact' element = {<Contact/>} />      
      <Route path ='*' element = {<Error/>} /> 
     </Routes>

  );
};

export default App;