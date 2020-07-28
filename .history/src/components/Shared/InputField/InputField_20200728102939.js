import React, { Component } from 'react';
class InputField extends Component {
    static defaultProps = {
        type: "text",
        changes: (event) => {
            console.log(event.target.value);
         
        },
        label: "Label",
        classes: "",
        value: "",
        id: "setId",
        name: "name",
        placeHolder: "placeHolder Here",
    }
    constructor(props) {
        super(props);
        this.state = {
            value: "Default"
        }
        this.defaultProps = {
            
        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.Label}</label>
                <input id={this.props.id} type={this.props.type} onChange={this.props.changes} placeholder={this.props.placeHolder} value={this.state.value}></input>


            </div>
        )
    }
}
export default InputField;