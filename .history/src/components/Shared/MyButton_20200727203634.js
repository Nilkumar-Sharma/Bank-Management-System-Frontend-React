import React,{Component } from 'react';

class MyButton extends Component {
    static defaultProps = {
        type:"text",
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
        return <button type={this.props.type} className={this.props.classes} onClick={this.props.onClick} value={this.props.value} >this.props.label</button>
    }

} 

export default MyButton;