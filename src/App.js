import logo from './logo.svg';
import './App.css';
//import './styles/estilos.css';
import Routing from './Routing';
import React, { createContext, useContext } from 'react';



const ThemeContext = React.createContext('theme-light');

function App() {
  return (
    <div id="app" className="theme-light">
      
        <Routing></Routing>
      
        
    </div>
  );
}

export default App;
