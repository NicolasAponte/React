import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {

  render(){
    return (
      <BrowserRouter>{/*Aplicacion ya habilitada para usar Browser Router*/}
        <div>
          <Main />{/*dishes ahora disponible en el componente menu*/}
        </div>   
      </BrowserRouter>                          
    );
  }
  
}

export default App;
