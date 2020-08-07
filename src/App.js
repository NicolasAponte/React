import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {

  render(){
    return (
      <div>
        <Main />{/*dishes ahora disponible en el componente menu*/}
      </div>                             
    );
  }
  
}

export default App;
