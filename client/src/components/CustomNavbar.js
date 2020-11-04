import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout_button";
import LoginButton from "./login_button";
import "./CustomNavbar.css";

const MainNav = () => (
  <Nav className="ml-auto">
    <Nav.Link
      className="navText"
      as={RouterNavLink}
      to="/home"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      className="navText"
      as={RouterNavLink}
      to="/messages"
      exact
      activeClassName="router-link-exact-active"
    >
      Messages
    </Nav.Link>
    <Nav.Link
      className="navText"
      as={RouterNavLink}
      to="/userProfile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand className="navText" href="/home" to="/home">
        HANG
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <MainNav />
        <AuthNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
