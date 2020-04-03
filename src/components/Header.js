import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
 // const [query, setQuery] = useContext(ApiContext);

  

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
              <Link to="/recipies">
                Recipies <FontAwesomeIcon icon={faUtensils} />
              </Link>
            </NavItem>
            <NavItem>
            <SearchBar />
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
