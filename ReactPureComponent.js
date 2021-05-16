import React from 'react';

export default class ReactPureComponent extends React.PureComponent{
    constructor(props,context) {
        super(props,context);
        console.log(context);
        this.state = {
            name: "Ankur"
        }
        this.varName = "";
    }

    changeNameInState = () => {
        this.setState( {
            name: this.varName
        });
        console.log(this.context);
    }

    changeName = (e) => {
        this.varName = e.target.value;
    }


    render() {
        return (
            <>
                {this.state.name}<br />
                <input type="text" onChange={this.changeName} /><br />
                <button onClick={this.changeNameInState}>Change name</button>
                {console.log("Rendered")}
            </>
        )
    }
}