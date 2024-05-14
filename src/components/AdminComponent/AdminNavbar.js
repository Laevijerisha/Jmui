import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../../assests/logo.png';
import '../../styles/AdminNavbar.css';
import Sidenav from './Sidenav';
import Home from '../../view/Home';

function AdminNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='topnav'>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/4.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.2">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.3">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidenav />
                <div style={{ marginLeft: '250px', padding: '20px' }}>
                   <Home/>
                    
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;