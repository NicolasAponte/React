import React, { Component } from 'react'; //Importar Component
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {//Extender Component

	constructor(props) {
		super(props); 

		this.state = {//Propiedades
            selectedDish: null,

        }
        console.log('Menu Component constructo is invoked');
    }
    
    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }


    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <DishDetail plato={dish}/>
            );
        }else {
            return(
                <div></div>
            );
        }
    }

	render() {
		//Definicion de constantes
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
					</Card>
				</div>
			);
        });
        console.log('Menu Component render is invoked');
		return (//Retorna lo que se verá en UI
			<div className="container">
				<div className="row">
                    {menu}{/*Constante JS, construccion del item menu*/}
				</div>
                    {this.renderDish(this.state.selectedDish)}
			</div>
		);
	}
}

export default Menu;