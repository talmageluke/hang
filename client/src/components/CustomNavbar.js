import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className='navText' href='/home' to='/home'>HANG</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='navText' href="/home" to="/home">Home</Nav.Link>
      <Nav.Link className='navText' href="/messages" to="/messages">Messages</Nav.Link>
      <Nav.Link className='navText' href="/userProfile" to="/userProfile">Profile</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}