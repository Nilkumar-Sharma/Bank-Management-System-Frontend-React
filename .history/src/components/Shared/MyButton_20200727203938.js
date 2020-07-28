import React,{Component } from 'react';
/**
 * @props label: name of the button
 * @props classes: class name
 * @props onClick: a function
 *
 *
 */
class MyButton extends Component {
    static defaultProps = {
        onClick:() => console.log("clicked "),
        label:"Button Label",
        value: "",
        classes: "btn btn-primary"
    }
    constructor(props) {
        super(props);
        console.log(this.props)

    }
    render() {
        return <button  className={this.props.classes} onClick={this.props.onClick} value={this.props.value} >{this.props.label}</button>
    }

} 

export default MyButton;