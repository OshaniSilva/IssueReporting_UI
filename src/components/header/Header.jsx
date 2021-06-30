import React from 'react';
import {Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import "./HeaderStyles.css";

// This returns the header component of the application
function Header() {

    // This function logs out the user
    const onLogout = () => {

        /* Once logout button in the header is clicked the authentication token
        in the local storage is removed and also 'loginSucces' is set to false */
        localStorage.setItem('loginSuccess', false);
        localStorage.removeItem('tokenId');

        // User is directed back to the login page
        window.location.href = "/";
    };

    return (
        <React.Fragment>
            <Navbar id="navBar" bg="light" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link id="about" href="/about">About</Nav.Link>
                        <NavDropdown id="issue" title="Issues" className="box stack-top" >
                            <NavDropdown.Item id="createIssue" href="/issue/create">Create Issue</NavDropdown.Item>
                            <NavDropdown.Item id="issueList" href="/issue/getAllIssues">Show Issue List</NavDropdown.Item>
                            <NavDropdown.Item id="dashboard" href="/issue/dashboard">Dashboard</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link  id="contact" href="/contact">Contact</Nav.Link>
                        <Nav.Link  id="faq" href="/faq">FAQ</Nav.Link>
                        <Button id="logoutSession" variant="outline-success" onClick={onLogout}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;