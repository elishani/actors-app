import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card}  from 'react-bootstrap';

class ActorComp extends React.Component {

    render() {
        console.log(this.props.actor)
        const actorName=`${this.props.actor.firstName} ${this.props.actor.lastName}` 
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.actor.image} />
                    <Card.Body>
                        <Card.Title><a href={this.props.actor.link} target="_blank">Name: {actorName} </a>
                        </Card.Title>
                        <Card.Text>
                            <h4>Age is: {this.props.actor.age()}</h4>
                        </Card.Text>    
                    </Card.Body>
                </Card>
            </div>
        )
    };
}

export default ActorComp;