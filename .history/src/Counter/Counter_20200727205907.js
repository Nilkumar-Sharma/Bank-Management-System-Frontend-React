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
                Counter state: {this.props.ctr}
            </div>
        )
    }
    
}
const mapStateToProps = (stateFromRedux) => {
  return   ctr: stateFromRedux.counter;

}


export default connect(mapStateToProps)(Counter);