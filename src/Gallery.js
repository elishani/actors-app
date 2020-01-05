import React from "react"
import actorsData from "./actorsData.json"
import ActorsComp from "./ActorComp.js"

export default class ActorsGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <div>
            <ActorsComp data={actorsData[0]} />
            <ActorsComp data={actorsData[1]} />
            </div>
        );
    }
}