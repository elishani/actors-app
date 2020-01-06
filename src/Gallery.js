import React from "react"
import actorsData from "./actorsData.json"
import ActorsComp from "./ActorComp.js"
import { Container, Row, Col } from 'react-bootstrap'

export default class ActorsGallery extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const actorComps = actorsData.map(actor =>  <ActorsComp actor={actor} /> )
        return (
            <div>
                <Container>
                    <Row>
                        {actorComps}
                    </Row>
                </Container>
            </div>
        );
    }
}