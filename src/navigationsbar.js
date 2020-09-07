import React from 'react';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import styled from 'styled-components'



const Styles = styled.div`

`;
export const NavigationBar = () => (
  <Styles>
  <Navbar expand="lg">
  <Navbar.Brand href="/"> home </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className= "navBar">
  <Nav.Item><NavLink href="/"> Home </NavLink> </Nav.Item>
<Nav.Item><NavLink href="/travel"> Travel </NavLink> </Nav.Item>


</Nav>
  </Navbar.Collapse>
  </Navbar>
  </Styles>
)
