import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <> {/*React Fragments: Agrega un nuevo elemento pero un nuevo nodo <React.Fragment>*/}
                <Navbar dark>
                    <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisienes, and create a unique fusion experinece. Our lispmacking creation will tickle your culinary sense!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;