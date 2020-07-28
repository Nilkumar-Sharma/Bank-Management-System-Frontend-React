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
        options: [],
        validators:[(event)=> "Deafault validator running ",(event)=>"ok"],
    }
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            errors:["ok","oksss"]
        }
        // this.props.PlaceHolder = this.props.Label;
     
    }
    async handleChange(event) {
        //run validation and return error if any else error is null
        // let classThis = this;
        this.setState({ value: event.target.value });
        await this.setState({ errors: [] }, (classThis) => {
            classThis.props.validators.map(x => classThis.setState({ errors: [...classThis.state.errors, x()] }))
            console.log(classThis.state.errors)

        })
        // console.log(this.state)
        this.props.changes(Object.assign(event,this.state.errors));
    }
    render() {
        return (
            // <div className="container">
            // <div className="row">
            <div className="form-group form-inline" >
                {
                    (this.props.errors||[]).length > 0 &&
                    <div className="error-div">
                        {this.props.errors.map(error => <div>{error}</div>)}
                        </div>
                
                }
               
                <div className="col-2">
                    <label className="label label-default"  htmlFor={this.props.id}>{this.props.Label}</label>

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
                            <select className="form-control" name={this.props.name} onChange={(event)=>this.handleChange(event)}>

                                {this.props.options.map(x =>
                                    <option value={x} key={x}>{x}</option>
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