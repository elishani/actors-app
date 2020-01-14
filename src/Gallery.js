import React from "react";
import actorsData from "./actorsData.json";
import ActorModle from "./ActorModle.js";
import ActorComp from "./ActorComp.js";
import { Row, Container } from 'react-bootstrap';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            actors: actorsData.map(item => new ActorModle(item),
            )
        }

        this.sortSelected = this.sortSelected.bind(this);
    }

    sortSelected(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { actors, value } = this.state;
        const newActors = actors.slice();

        if ( value === "age"){ 
            newActors.sort(function(a,b){
                return a.age() - b.age();
            }); 
        }

        if ( value === "firstName" || value === "lastName"){
                const ActorComps = actors.map(actor => <ActorComp actor={actor} />)
                newActors.sort(function(a,b){
                let x = a[value].toLowerCase();
                let y = b[value].toLowerCase();
                return x < y ? -1 : x > y ? 1 :0;
            });
        }  

    const ActorComps = newActors.map(actor => <ActorComp actor={actor} />)

    return (
            <div>
                <Container>
                    <select value={value} onChange={this.sortSelected}>
                        <option value="unSorted">unSorted</option>
                        <option value="firstName">Sorted By FirstName</option>
                        <option value="lastName">Sorted By LastName</option>
                        <option value="age">Sorted By Age</option>
                    </select>
                    <Row>
                        {ActorComps}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Gallery