import React, { Component } from 'react';
import './InputField.css'
class InputField extends Component {
    static defaultProps = {
        type: "text",
        changes: (e) => console.log(e.target),
        Label: "Label",
        classes: "",
        value: "",
        // id: "setId",
        name: "name",
        // PlaceHolder: "PlaceHolder Here",
        options: [],
        readOnly: false,
        validators: [(event) => { return "Custom Validator in effect " }],
    }
    constructor(props) {
        super(props);
        console.log(this.props.value)
        this.state = {
            value: this.props.value || "",
            errors: [],
            isDirty: false,

        }
        // this.props.PlaceHolder = this.props.Label;

    }
    handleChange(event) {
        //run validation and return error if any else error is null
        this.setState({ value: event.target.value, isDirty: true });
        this.setState({ errors: [] }, () => {
            let err = []
            this.props.validators.map(x => {
                if (x(this.state.value) !== true)
                    err = [...err, x(this.state.value)]
                //     this.setState({ errors: [...this.state.errors,x(event)
                //      }, function () { console.log(this.state)})
                // debugger
                // console.log(x())
                // console.log((x(this.state.value)))
                // })
                return err
            })
            this.setState({ errors: err }, () => {
                console.log(this.state)
            })
        })
        this.props.changes(event, this.state.errors)
        // console.log(this.state)
    }
    render() {
        try {
            return (
                <div className="class1">
                    {
                        (this.props.errors || []).length > 0 &&
                        <div className="error-div">
                            {this.props.errors.map(error => <div>{error}</div>)}
                        </div>

                    }
                    {/* <div className=""> */}
                    <div className="col">
                        <label className="label label-primary " htmlFor={this.props.id||this.props.name}>{this.props.Label}</label>
                    </div>
                    <div className="col">
                        {this.props.type === "text" &&
                            <input className="" name={this.props.name} id={this.props.id||this.props.name} type={this.props.type} onChange={
                                // (this.props.changes) || ((e)=>{this.setState({value:e.target.value})})
                                (event) =>
                                    this.handleChange(event)
                            }
                            placeholder={this.props.placeHolder||this.props.name} value={this.state.value}

                                disabled={this.props.readOnly !== false?true:false}

                            ></input>


                        }
                        {
                            this.props.type === "select" &&
                            <div>
                                <select id={this.props.id|| this.props.name} className="" name={this.props.name} onChange={(event) => this.handleChange(event)}
                                    disabled={this.props.readOnly !== false ? true : false}
                                    // defaultValue={(this.props.value.length > 0 && "this.props.value")}
                                >
                                    {this.props.options.map(x =>
                                        <option value={x} key={x}
                                            selected={(x === this.props.value) && true}
                                        >{x}</option>
                                    )}
                                </select>
                            </div>
                        }

                        {this.props.type === "date" &&
                            <input className="" name={this.props.name} id={this.props.id||this.props.name} type={this.props.type} onChange={
                                // (this.props.changes) || ((e)=>{this.setState({value:e.target.value})})
                                (event) =>
                                    this.handleChange(event)
                            }
                                placeholder={this.props.placeHolder || this.props.name} value={this.state.value}

                                disabled={this.props.readOnly !== false ? true : false}

                            ></input>


                        }
                       

                    </div>
                    {
                        this.state.errors.length > 0 && this.state.isDirty &&
                        <div className="col">
                            {
                                // this.state.errors.map(error =>
                                // <ul>
                                <small className="text-danger" >
                                    <span>&#10060;</span>  {this.state.errors[0]}
                                </small >
                                //  </ul>
                                // )
                            }
                        </div>
                    }
                    {
                        this.state.errors.length === 0 && this.state.isDirty &&
                        <div className="col">
                            {
                                // this.state.errors.map(error =>
                                // <ul>
                                <small className="text-success" >
                                    &#10004; Validated
                            </small >
                                //  </ul>
                                // )
                            }
                        </div>
                    }
                </div>
                // </div>

            )
        } catch (error) {
            console.log(error)
            return (<div>SomeError has Happened,Contact Admin</div>)
        }
    }
}
export default InputField;