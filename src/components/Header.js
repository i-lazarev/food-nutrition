import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroup,
  InputGroupText
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ paddingRight: "5%" }} href="/">
          Food for All
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto, nav-bar" navbar>
            <NavItem>
              <NavLink href="#">
                Recipies <FontAwesomeIcon icon={faUtensils} />
              </NavLink>
            </NavItem>
            <NavItem>
              <InputGroup>
                <Input className="input-search" placeholder="Search" />
                <InputGroupText>
                  <FontAwesome name="search"  />
                </InputGroupText>
              </InputGroup>
            </NavItem>
            <div style={{ display: "flex" }}>
              <NavItem>
                <NavLink href="/components/">Create an account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Log in</NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
