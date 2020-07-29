import React, { Component } from 'react'
import {connect } from 'react-redux'
class Alert extends Component{
    constructor(props) {
        super(props)
        // this.state = {
        //     show:true
        // }
    }
    render() {
        return (
        <div>
            { 
                this.props.showAlert.typ!='hide' &&
            <div className = "alert alert-success alert-dismissible" >
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong>{ this.props.showAlert.message }
</div >       

                }
            </div>


        )
    }
}
const mapStateToProps = state => {
    console.log(state.showAlert)
    return {
        showAlert: state.showAlert

    }
}

export default connect(mapStateToProps)(Alert);