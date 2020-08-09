import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';
 

class Main extends Component {
  constructor(props) {

    super(props);

    this.state = {
      dishes: DISHES, //Se trata como una instanciacion del DISHES dentro del estado dishes
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }


  render(){

    const HomePage = () => { {/**Forma larga*/}
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }
    return (
      <div>
        <Header />
        <Switch>{/*Se usa para contener los Route */}
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> {/*Forma corta */}
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />{/*Direccion por defecto */}
        </Switch>
        <Footer />
        </div>                             
    );
  }
  
}


export default Main;
