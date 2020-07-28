import React, { Component } from 'react';
class InputField extends Component {
    static defaultProps = {
        type: "text",
        changes:(e)=>console.log(e.target),
        label: "Label",
        classes: "",
        value: "",
        id: "setId",
        name: "name",
        placeHolder: "PlaceHolder Here",
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.Label
        }
     
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.changes(event);
    }

    render() {
        return (
            // <div className="container-fluid">
            <div className="row">
                <div className="col-3 .offset-3 ">
                    <label htmlFor={this.props.id}>{this.props.Label}</label>

                </div>
                <div className="col-3">
                    <input name={this.props.name} id={this.props.id} type={this.props.type} onChange={
                        // (this.props.changes) || ((e)=>{this.setState({value:e.target.value})})
                        (event) =>
                            this.handleChange(event)
                    } placeholder={this.props.placeHolder} value={this.state.value}></input>

                    </div>
                {/* </div> */}

           

            </div>
        )
    }
}
export default InputField;