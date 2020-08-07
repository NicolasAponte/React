import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroupItemText } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderComments(dish) {
        return (
        dish.map((comment) =>  
        <div>
            <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
            </ul>
        </div>
        )
        );
    }

    render() {
        const dish = this.props.plato;
        if (dish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                );            
        }else{
            return(<div></div>);   
        }

    }

}

export default DishDetail;