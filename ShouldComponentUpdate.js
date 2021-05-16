import React from 'react';

class ShouldComponentUpdate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Ankur"
        }
        console.log("Constructor called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        if(nextState.name == this.state.name)
        return false;
        else return true;
    }

    componentDidMount() {
        console.log("Component Did Mount called");
    }

    componentDidUpdate() {
        console.log("Component Did Update called");
    }


    handleChange = (name) => {
        this.setState( {
            name: name
        }, () => {
            console.log("State value: " + this.state.name);
        })
    }

    render() {
        return (
            <>
                {this.state.name}<br />
                <button onClick={() => this.handleChange("Ankur")}>Change to Ankur</button>
                <button onClick={() => this.handleChange("Rohit")}>Change to Rohit</button>
                {console.log("Rendering")}
            </>
        )
    }
}

export default ShouldComponentUpdate;