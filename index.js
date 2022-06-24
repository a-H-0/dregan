import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter} from 'react-router-dom';
import Abc from './Abc';
import App from './App';
import Def from './Def';

//import Table from 'react-bootstrap/esm/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    {App()}
   </BrowserRouter>
   {/* <Abc/> */}
   {/* <Def/> */}
 
  </>
);

