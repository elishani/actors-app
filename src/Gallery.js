import React from "react"
import actorsData from "./actorsData.json"
import ActorComp from "./ActorComp.js"
import {Row, Container}  from 'react-bootstrap'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ActorComps = actorsData.map(actor => <ActorComp actor={actor} />)
        return (
            <div>
                <Container>
                    <Row>
                        {ActorComps}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Gallery