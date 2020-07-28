import { Component } from 'react';

class MyButton extends Component {
    static defaultProps = {
        type="text",
        onClick=() => console.log("clicked "),
        label="Button Label",
        value=""
    }
    constructor(props) {
        super(props);

    }
    render() {
        <Button type={this.props.type} value={this.props.value} >Label</Button>
    }

} 