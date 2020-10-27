import React from 'react'
import { Nav,NavDropdown,Navbar, Button } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import 'bootstrap/dist/css/bootstrap.css';
import { MenuItem } from '@material-ui/core';
const NavbarComponent = () => {
    
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
                <Link  to='/' className="nav-link">
                    <MenuItem style={{textDecoration:'none',color:'white'}}>SUSHIKUNG</MenuItem>
                </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/Booking" className="nav-link">จองที่นั่ง</Link>
                <Link to="/TicketChecking" className="nav-link">ตรวจสอบที่นั่ง</Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Admin Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent