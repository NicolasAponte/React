import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      dishes: DISHES //Se trata como una instanciacion
    };                  //del DISHES dentro del estado dishes
  }
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>{/*dishes ahora disponible en el componente menu*/}
      </div>                             
    );
  }
  
}

export default App;
