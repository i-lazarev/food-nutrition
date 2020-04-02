import React, { useState, useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {TokenContext} from './TokenContext';
import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStar,
  faUserEdit,
  faSignOutAlt,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
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

  const [token, setToken] = useContext(TokenContext);
  const [show, setShow]=useState(false)
  console.log(token);
  const handleSignOut=()=>{
      setToken(null);
  }
  const handleShowInfo=()=>{
     setShow(!show);
  }

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        style={{ padding: "8px 40px 8px 40px" }}
        color="light"
        light
        expand="md"
      >
        <NavbarBrand href="/">Food for All</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto, nav-bar" navbar>
            <NavItem style={{ paddingLeft: "40px" }}>
              <NavLink href="/recipes">
                Recipes <FontAwesomeIcon icon={faUtensils} />
              </NavLink>
            </NavItem>
            <NavItem>
              <SearchBar />
              {/* <form style={{"display":"flex"}}>
                <Input type="text" name="search" className="input-search" placeholder="Search" onChange={updateQuery}/>
                <button>
                  <FontAwesome name="search"  />
                </button>
              </form> */}
            </NavItem>
            {token ? (
              <div
                className="nav"
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <NavLink onClick={handleShowInfo}>
                  <span>show info</span> {show?<FontAwesomeIcon icon={faAngleDown} />:<FontAwesomeIcon icon={faAngleUp} />}
                </NavLink>
                <NavItem>
                  <NavLink href="/favorite">
                    <FontAwesomeIcon icon={faStar} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <FontAwesomeIcon icon={faUserEdit} />
                  </NavLink>
                </NavItem>
                <NavLink onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </NavLink>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <NavItem>
                  <NavLink href="/sign-up">Sign up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Log in</NavLink>
                </NavItem>
              </div>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
