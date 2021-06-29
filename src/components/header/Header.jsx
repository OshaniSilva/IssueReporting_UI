import React from 'react';
import {Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import "./HeaderStyles.css";
import LoginLogout from "../login/LoginLogout";

function Header() {

    const onFailure = () => {
        // RefreshToken(res);
        console.log("===============Header=======onFailure====================");
        localStorage.setItem('loginSuccess', false);
        localStorage.removeItem('tokenId');
        window.location.href = "/login";
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

                        <NavDropdown id="profile" title="Profile" className="box stack-top"  onClick={LoginLogout.onFailure}>
                            <NavDropdown.Item id="backToLogin" href="/login">Login</NavDropdown.Item>
                        </NavDropdown>

                        <Button id="logoutSession" variant="outline-success" onClick={onFailure}>Logout</Button>
                        {/*<Nav.Link  id="loginLogout" href="/login">Login</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment>
    );
}

export default Header;