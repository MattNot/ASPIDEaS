import {Button, Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import React from "react";

function ASPNavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <NavbarBrand href="/">SaASP IDE</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown id="basic-nav-dropdown" title="File">
                        <NavDropdown.Item> <Button>Prova</Button></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default ASPNavBar;