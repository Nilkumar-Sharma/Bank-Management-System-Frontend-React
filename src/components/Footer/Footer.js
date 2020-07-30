import React, { Component } from 'react'
import './Footer.scss'
class Footer extends Component {
    render() {
        try {
            return (<div className="navbar-fixed-bottom nav1">
                <footer className="page-footer font-small unique-color-dark pt-4">
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    Nilkumar Sharma
                </div>
                </footer>
            </div>)
        } catch (error) {
            console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>) }
    }
}
export default Footer;