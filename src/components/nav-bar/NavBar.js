import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">
                    <i className="bi-code-square nav-icon" /> Luke Irvine
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/apps" target="_blank">Apps</Nav.Link>
                        <Nav.Link href="mailto: lukeirvinefreelance@gmail.com">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
