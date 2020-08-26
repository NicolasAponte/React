import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => { 
  //Con esto, la clase Main recibira estos states como props 
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    } 
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())}
});

class Main extends Component {

  constructor(props) {

    super(props);

  }
  //LifeCycle solo sera llamado despues de que el componente ha sido montado en la vista de la aplicacion
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();

  }

  render(){

    const HomePage = () => { //Forma larga
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}

        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}

        leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const DishWithId = ({match}) => { {/*Solo tiene en cuenta el match */}
    
    return(
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
      errMess={this.props.comments.errMess}
      postComment = {this.props.postComment}
      />
    );
  }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>{/*Se usa para contener los Route */}
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> {/*Forma corta */}
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />}/>
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />{/*Direccion por defecto */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
        </div>                             
    );
  }
  
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

//Connect: Conecta el React Component con Redux store 