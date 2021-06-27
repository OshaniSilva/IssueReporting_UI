import React from 'react';
import {Link} from "react-router-dom";

function Header() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <li className="nav-item">
                    <Link to={"/about"} className="nav-link">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/issue"} className="nav-link">
                        Issues
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/faq"} className="nav-link">
                        FAQ
                    </Link>
                </li>
            </nav>
        </React.Fragment>
    )
}

export default Header;