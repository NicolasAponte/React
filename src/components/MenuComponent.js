import React, { Component } from 'react'; //Importar Component
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {//Extender Component

	constructor(props) {
		super(props); 

		this.state = {//Propiedades
            selectedDish: null
		}
    }
    
    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
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
				<div key={dish.id} className="col-12 col-lg-5 m-1">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
					</Card>
				</div>
			);
		});
		return (//Retorna lo que se verá en UI
			<div className="container">
				<div className="row">
                    {menu}{/*Constante JS, construccion del item menu*/}
				</div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
			</div>
		);
	}
}

export default Menu;