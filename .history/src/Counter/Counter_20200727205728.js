import MyButton from '../components/Shared/MyButton';
import React,{ Component } from 'react';
class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            counter:0
        }
    }
    render() {
        return (
            <div>
                Counter state: {this.state.counter}
            </div>
        )
    }

    mapStateToProps = (stateFromRedux) => {
         stateFromRedux=this.ctr
        
    }

}

export default Connect(mapStateToProps)(Counter);