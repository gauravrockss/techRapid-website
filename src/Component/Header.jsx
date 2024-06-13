import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Navbar expand='lg' className='nav-bar'>
                <Container>
                    <Navbar.Brand href='#' style={{ fontSize: '30px' }}>
                        TechRapid
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav
                            className='ms-auto my-2 my-lg-0'
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavLink to='/' className='nav-link link'>
                                Home
                            </NavLink>
                            <NavLink to='/about' className='nav-link link'>
                                About
                            </NavLink>
                            <NavLink to='/services' className='nav-link link'>
                                Services
                            </NavLink>
                            <NavLink to='/contact' className='nav-link link'>
                                Contact
                            </NavLink>
                            <Button className='main-button '>Sign Up</Button>
                            <Button className='main-button2 ms-3 my-lg-0 my-3'>
                                Log in
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;
