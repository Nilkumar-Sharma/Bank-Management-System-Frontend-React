import React, { Component } from 'react';
import './InputField.css'
class InputField extends Component {
    static defaultProps = {
        type: "text",
        changes:(e)=>console.log(e.target),
        Label: "Label",
        classes: "",
        value: "",
        id: "setId",
        name: "name",
        PlaceHolder: "PlaceHolder Here",
        options:[]
    }
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        // this.props.PlaceHolder = this.props.Label;
     
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        // console.log(event.target.value)
        this.props.changes(event);
    }
    render() {
        return (
            // <div className="container">
            // <div className="row">
                <div className="form-group form-inline" >
                <div className="col-2">
                    <label htmlFor={this.props.id}>{this.props.Label}</label>

                </div>
                <div className="col-2">
                    {this.props.type=="text" && 
                        <input className="form-control" name={this.props.name} id={this.props.id} type={this.props.type} onChange={
                            // (this.props.changes) || ((e)=>{this.setState({value:e.target.value})})
                            (event) =>
                                this.handleChange(event)
                        } placeholder={this.props.placeHolder} value={this.state.value}></input>
                    }
                    {
                        this.props.type == "select" &&
                        <div>
                            <select name={this.props.name} onChange={this.handleChange}>

                                {this.props.options.map(x =>
                                    <option value={x}>{x}</option>
                                    )}
                                {/* <option value="A">Apple</option> */}
                                {/* <option value="B">Banana</option> */}
                                {/* <option value="C">Cranberry</option> */}
                            </select>
                            </div>

                    }
                    </div>
                    </div>
                    // </div>
            // </div>
        )
    }
}
export default InputField;