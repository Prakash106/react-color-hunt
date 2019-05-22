import React from "react"
import { Navbar, Nav} from 'react-bootstrap'
import './AppNavbar.css'
import Logo from '../assets/color-hunt-palettes-logo.png'

function AppNavbar () {
    return (
        <Navbar className="padding-both soft_shadow" collapseOnSelect expand='lg' bg='white' variant='light'>
        <Navbar.Brand href='#home'><img src={Logo} className="logo" /> ColorHunt - React</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto theme-nav'>
            <Nav.Link href='#features'>Palettes</Nav.Link>
            <Nav.Link href='#pricing'>New</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default AppNavbar