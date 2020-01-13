import React from "react";
import actorsData from "./actorsData.json";
import ActorObjt from "./ActorObjt.js";
import ActorComp from "./ActorComp.js";
import { Row, Container } from 'react-bootstrap';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actors: actorsData.map(item => new ActorObjt(item)
            )
        }
        
    }

    render()
     {  
        console.log(actorsData)
        const ActorComps = this.state.actors.map(actor => <ActorComp actor={actor} />)
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