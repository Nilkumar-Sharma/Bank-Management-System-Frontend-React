/**
 * @props label: name of the button || default is "Label"
 * @props classes: Class Name
 * @props onClick: a function || Default is console.log("clicked")
 *
 */
import React,{Component } from 'react';
import './MyButton.css'
const MyButton = (props = {
    clicked: () => console.log("clicked "),
    label: "Button Label",
    value: "",
    classes: "btn btn-secondary"
})=>{
    //  defaultProps = {
    //     clicked:() => console.log("clicked "),
    //     label:"Button Label",
    //     value: "",
    //     classes: "btn btn-secondary"
    // }
    // constructor(props) {
    //     super(props);
    //     console.log(props)
    // }
    // render() {
        try{
        return <button className={props.classes} onClick={props.clicked} value={props.value} >{props.label}</button>
        } catch (error) {
            console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>) }
        // }
} 
export default MyButton;