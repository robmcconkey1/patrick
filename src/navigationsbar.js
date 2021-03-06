import React from 'react';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import styled from 'styled-components'



const Styles = styled.div`

`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/home"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" id="basic-navbar-nav" stlye = 'color: #0000000'>
        <Nav className= "navBar">
          <Nav.Item><NavLink href="/"> Home </NavLink> </Nav.Item>
          <Nav.Item><NavLink href="/services"> Services </NavLink> </Nav.Item>
          <Nav.Item><NavLink href="/about"> About </NavLink>  </Nav.Item>
          <Nav.Item><NavLink href="/gallery"> Gallery </NavLink>  </Nav.Item>
          <Nav.Item><NavLink href="/contact"> Contact </NavLink> </Nav.Item>

            <NavDropdown href="/recent" title="Recent Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recent">Canterbury</NavDropdown.Item>
            </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
