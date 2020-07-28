import React, { Component } from 'react';
class InputField extends Component {
    static defaultProps = {
        type: "text",
        changes: (event) => {
            console.log(event.target.value);
            setState({
                value:"234"
            });
            
        },
        label: "Label",
        classes: "",
        value: "",
    }
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.value
        }

    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.label}>{this.props.Label}</label>
                <input id={this.props.label} type={this.props.type} onChange={this.props.changes} value={this.state.value}></input>


            </div>
        )
    }
}
export default InputField;