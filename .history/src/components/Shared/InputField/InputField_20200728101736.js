import React, { Component } from 'react';
class InputField extends Component{
    static defaultProps = {
        type: "text",
        changed: (event) => console.log(event.target.value),
        label: "Label",
        classes:"",
    }
    constructor(props) {


        super(props);
        
    }

    render() {
        return (
            <div>
                <label for={label}>{Label}</label>
                <input id={label} type={type} onChange={changes} value={value}></input>


            </div>
        )
    }
}