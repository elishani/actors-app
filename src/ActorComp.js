import React from "react"

class ActorComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: this.props.data.FirstName,
            LastName: this.props.data.LastName,
            Birthday: this.props.data.Birthday,

            //  calcAge: function(){
            //     const currentYear = new Date().getFullYear();
            //    // const age1 = currentYear - new Date(this.state.Birthday).getFullYear();
                
            //     return (Birthday);
            // }
            };
        }

        calcAge(){
            const currentYear = new Date().getFullYear();
             const age = currentYear - new Date(this.state.Birthday).getFullYear();
             return (age);
        }


    render() {
        return (
            <h2> {this.state.FirstName} {this.state.LastName} {this.calcAge()}</h2>
        )
    }
}

export default ActorComp;