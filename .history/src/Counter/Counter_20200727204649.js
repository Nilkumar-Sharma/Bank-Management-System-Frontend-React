import MyButton from '../components/Shared/MyButton';
import React,{ Component } from 'react';
class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ctr:0
        }
    }
    render() {
        return (
            <div>

                Counter state:

            </div>


        )
    }

}

export default Counter;