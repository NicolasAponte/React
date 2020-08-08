import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';


class Main extends Component {
  constructor(props) {

    super(props);

    this.state = {
      dishes: DISHES, //Se trata como una instanciacion del DISHES dentro del estado dishes
      selectedDish: null
    }
  }
  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
    }
    
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>{/*dishes ahora disponible en el componente menu*/}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />      
        </div>                             
    );
  }
  
}


export default Main;