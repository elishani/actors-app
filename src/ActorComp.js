import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card}  from 'react-bootstrap'

class ActorComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.actor.firstName,
            lastName: this.props.actor.lastName,
            birthday: this.props.actor.birthday,
            image: this.props.actor.image
        };
    }

    calcAge = () => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - new Date(this.state.birthday).getFullYear();
        return (age);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                        <Card.Title>{this.state.firstName} {this.state.lastName}</Card.Title>
                        <Card.Text>
                            <h4>{this.calcAge()}</h4>
                        </Card.Text>    
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ActorComp;