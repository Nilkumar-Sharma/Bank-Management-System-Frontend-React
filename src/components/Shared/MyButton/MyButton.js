/**
 * @props label: name of the button || default is "Label"
 * @props classes: Class Name
 * @props onClick: a function || Default is console.log("clicked")
 *
 */
import React,{Component } from 'react';
import './MyButton.css'
class MyButton extends Component {
    static defaultProps = {
        clicked:() => console.log("clicked "),
        label:"Button Label",
        value: "",
        classes: "btn btn-secondary"
    }
    constructor(props) {
        super(props);
        console.log(this.props)

    }
    render() {
        return <button className={this.props.classes} onClick={this.props.clicked} value={this.props.value} >{this.props.label}</button>
    }

} 

export default MyButton;