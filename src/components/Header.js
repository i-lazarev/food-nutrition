import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TokenContext } from "./TokenContext";
import "../styles/header.css";
import image from "../images/foodaholic.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStar,
  faUserEdit,
  faSignOutAlt,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [query, setQuery] = useContext(ApiContext);

  const [token, setToken] = useContext(TokenContext);
  const [show, setShow] = useState(false);

  const handleSignOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const handleShowInfo = () => {
    setShow(!show);
  };

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/check-token", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => 
         {
          if (data == "expired") {
            setToken(null);
            localStorage.removeItem("token");
          }
        }
        );
    }
  }, [token]);

  return (
    <div className="main-section">
      <Navbar
        color="dark"
        dark
        expand="md"
      >
        <NavbarBrand href="/"><img id="logo" src={image} alt="logo"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto, nav-bar" navbar>
            <NavItem style={{ paddingLeft: "40px" }}>
              <NavLink href="/recipes">
                Recipes <FontAwesomeIcon className="search-icon" icon={faUtensils} />
              </NavLink>
            </NavItem>
            <NavItem>
              <SearchBar />
            </NavItem>
            {token ? (
              <div
                className="nav"
              >
                <NavLink onClick={handleShowInfo}>
                  <span>{show ? "hide info" : "show info"}</span>{" "}
                  {show ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}
                </NavLink>
                <NavItem>
                  <NavLink title="your favorite recipes" href="/favorite">
                    <FontAwesomeIcon icon={faStar} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink title="update your info" href="/edit-account-info">
                    <FontAwesomeIcon icon={faUserEdit} />
                  </NavLink>
                </NavItem>
                <NavLink title="sign out" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </NavLink>
              </div>
            ) : (
              <div className="log-sign">
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
      {show ? <Profile /> : ""}
    </div>
  );
};

export default Header;