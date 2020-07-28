import MyButton from '../components/Shared/MyButton';
import React, { Component } from 'react';
import {connect} from 'react-redux'
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
                Counter state:
                {this.props.ctr}
            </div>
            <MyButton label="Increment" clicked={this.props.onIncrementCounter}></MyButton>
            // <MyButton label="Decrement" clicked={this.props.onDecrementCounter}></MyButton>

        )
    }
    
}
const mapStateToProps = (state) => {
    console.log(state)
    return { ctr: state.counter }

}
const mapDispatchToState = (dispatch) => {
    return {
        onIncrementCounter: () => {
            dispatch({type:"INC"})
        },
        onDecrementCounter: () => {
            dispatch({ type: "DEC" })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToState)(Counter);