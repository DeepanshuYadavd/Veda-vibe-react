import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
const UserDashboardLinks = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      className=" md:border  !border-[#A8CD9F] mt-4 rounded-2xl"
    >
      <Nav className="p-1 !flex-col w-full">
        <LinkContainer
          to="/user/my-profile"
          className="mt-1 bg-[#e2f0de] hover:bg-[#436850] hover:!text-white"
        >
          <Nav.Link>My Profile</Nav.Link>
        </LinkContainer>
        <LinkContainer
          to="/user/orders"
          className="mt-1 bg-[#e2f0de] hover:bg-[#436850] hover:!text-white"
        >
          <Nav.Link>My Orders</Nav.Link>
        </LinkContainer>

        <Nav.Link className="mt-1 bg-[#e2f0de] hover:bg-[#436850] hover:!text-white">
          logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default UserDashboardLinks;