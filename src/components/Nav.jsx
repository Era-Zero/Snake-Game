import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Nav = (props) => {
    // Checks to see the current path of the file and if it match's the current location it hides it's link button
    const isActive = (path) => {
        if (props.history.location.pathname === path){
            return {
                display: 'none',
            }
        }
    }

    // A basic bootstrap drop down component
    return(
        <UncontrolledDropdown>
            <DropdownToggle caret>
                Menu
            </DropdownToggle>
            <DropdownMenu>
                <Link  style={isActive("/")} to="/" ><DropdownItem className="btn btn-outline-dark">Home</DropdownItem></Link>
                <Link style={isActive("/game")} to="/game"><DropdownItem className="btn btn-outline-dark" >Game</DropdownItem></Link>
            </DropdownMenu>
        </UncontrolledDropdown>
    )

}

export default withRouter (Nav)