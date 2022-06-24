import React from 'react';
import Login from './Login';
import About from './About';
import Menu from './Menu';
//import Home from './Home';
//import './App.css';

import { Route,Routes } from 'react-router';

function App() {
  return (
   <>
   
   <Menu/>
   <Routes>
    <Route path="/"  element={<Login/>}/>
    <Route path="About"   element={<About/>}/>
   </Routes>
   

   </>
  )
}

export default App;
