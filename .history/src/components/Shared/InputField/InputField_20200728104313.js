import React, { Component } from 'react';
class InputField extends Component {
    static defaultProps = {
        type: "text",
        
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
     
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.changes(event);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.Label}</label>
                <input name={this.props.name} id={this.props.id} type={this.props.type} onChange={
                    // (this.props.changes) || ((e)=>{this.setState({value:e.target.value})})
                    this.handleChange.bind(this)
                    } placeholder={this.props.placeHolder} value={this.state.value}></input>


            </div>
        )
    }
}
export default InputField;