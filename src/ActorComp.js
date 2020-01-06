import React from "react"
import { Card } from 'react-bootstrap'

export default class ActorComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: this.props.actor.FirstName,
            LastName: this.props.actor.LastName,
            Birthday: this.props.actor.Birthday,
            Image: this.props.actor.Image,
        };
    }

    calcAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - new Date(this.state.Birthday).getFullYear();
        return (age);
    }


    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.Image} />
                <Card.Body>
                    <Card.Title>{this.state.FirstNmae} {this.state.LastName}</Card.Title>
                    <Card.Text>
                    {this.state.Birthday}
                    </Card.Text>
                </Card.Body>
            </Card>
        
        );
    }
}
