import { React,Component } from 'react';

class MyButton extends Component {
    static defaultProps = {
        type:"text",
        onClick:() => console.log("clicked "),
        label:"Button Label",
        value:""
    }
    constructor(props) {
        super(props);
        console.log(this.props)

    }
    render() {
        return <button  >Label</button>
    }

} 

export default MyButton;