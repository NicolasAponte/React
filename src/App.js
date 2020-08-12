import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
  

  render(){
    return (
      <Provider store={store}> 
        {/*El store ahora disponible en todos los componentes */}
        <BrowserRouter>{/*Aplicacion ya habilitada para usar Browser Router*/}
          <div className="App">
            <Main />{/*dishes ahora disponible en el componente menu*/}
          </div>   
        </BrowserRouter>  
      </Provider>                   
    );
  }
  
}

export default App;
