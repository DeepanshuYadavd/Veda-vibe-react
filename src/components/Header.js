import React from "react";
import "tailwindcss/tailwind.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary !bg-[#436850] md:h-[5rem] lg:h-[4rem] "
    >
      <Container className="flex gap-3  bg-[#436850] ">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img className="h-[3.3rem]" src="/images/logo.png" alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex gap-1.5">
            <LinkContainer to="/">
              <Nav.Link className="sm:text-black text-white text-md">
                Home
              </Nav.Link>
            </LinkContainer>
            <NavDropdown
              title={<span className="text-white">Consult Vaidya</span>}
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                eventKey="/consult/text"
                as={Link}
                to="/consult/text"
              >
                Text Consultation
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/consult/audio"
                as={Link}
                to="/consult/audio"
              >
                Audio Consultation
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/consult/video"
                as={Link}
                to="/consult/video"
              >
                Video Consultation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Panchkarma Therapies</span>}
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                eventKey="/therapy/relaxation"
                as={Link}
                to="/therapy/relaxation"
              >
                Relaxation Therapies
              </NavDropdown.Item>

              <NavDropdown.Item
                eventKey="/therapy/basti"
                as={Link}
                to="/therapy/basti"
              >
                Basti Therapies
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/therapy/swedan"
                as={Link}
                to="/therapy/swedan"
              >
                Swedan Therapies
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/therapy/agnikarma"
                as={Link}
                to="/therapy/agnikarma"
              >
                Agnikarma
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/therapy/raktMokshan"
                as={Link}
                to="/therapy/raktMokshan"
              >
                Rakt Mokshan
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/therapy/detox"
                as={Link}
                to="/therapy/detox"
              >
                Detox Therapies
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link className="!text-white text-md">
                {" "}
                <span className="mr-1">Appointment</span>
                <i class="bi bi-calendar"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link className="!text-white text-md">
                <span className="mr-1">Shop </span>
                <i class="bi bi-shop-window"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className="!text-white text-md">
                <span className="mr-1">CART</span>
                <i class="bi bi-bag-check-fill"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="flex gap-2">
            <NavDropdown
              className=" border !border-[#A8CD9F] rounded-md "
              title={
                <span className="font-semibold text-dark">
                  <i class="bi bi-person-check-fill"></i>
                </span>
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                eventKey="/user/my-profile"
                as={Link}
                to="/user/my-profile"
              >
                Customer
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="" as={Link} to="/admin/user-details">
                Admin
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer
              to="/login"
              className=" border !border-[#A8CD9F] rounded-md "
            >
              <Nav.Link className="font-semibold">
                <span className="mr-1 p-2 ">log in</span>
                <i class="bi bi-box-arrow-in-right"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link eventKey={2} className="!text-white text-md">
                <span className="mr-1">Register</span>
                <i class="bi bi-person-fill"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
