import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TokenContext } from "./TokenContext";
import "../styles/header.css";
import {ApiContext} from './ApiContext';


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
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useContext(ApiContext);
  const [token, setToken] = useContext(TokenContext);
  const [show, setShow] = useState(false);
  const history=useHistory();

  const handleSignOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    history.push('/');
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
        .then((data) => {
          if (data === "expired") {
            setToken(null);
            localStorage.removeItem("token");
          }
        });
    }
  }, [setToken, token]);

  return (
    <div style={{ fontSize: "18px", position: "relative", zIndex: "3" }}>
      <Navbar
        style={{ padding: "8px 40px 8px 50px", backgroundColor: '#000' }}
        dark
        expand="md"
      >
        <NavbarBrand href="/">
          <span className="logoA">yummy </span>
          <span className="logoB">DB</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto, nav-bar" navbar>
            <NavItem style={{ paddingLeft: "40px" }}>
              <NavLink href="/recipes">
                <div className="navLinkBtn">
                  Recipes{" "}
                  <FontAwesomeIcon className="search-icon" icon={faUtensils} />
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <SearchBar />
            </NavItem>
            {token ? (
              <div
                className="nav"
              >
                <NavLink>
                  <div className="navLinkBtn" onClick={handleShowInfo}>
                    <span>{show ? "hide info" : "show info"}</span>{" "}
                    {show ? (
                      <FontAwesomeIcon
                        style={{ paddingTop: "4px" }}
                        icon={faAngleUp}
                      />
                    ) : (
                      <FontAwesomeIcon
                        style={{ paddingTop: "4px" }}
                        icon={faAngleDown}
                      />
                    )}
                  </div>
                </NavLink>
                <NavItem>
                  <NavLink title="your favorite recipes" href="/favorite">
                    <div className="navLinkBtn">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink title="update your info" href="/edit-account-info">
                    <div className="navLinkBtn">
                      <FontAwesomeIcon icon={faUserEdit} />
                    </div>
                  </NavLink>
                </NavItem>
                <NavLink>
                  <div
                    className="navLinkBtn"
                    title="sign out"
                    onClick={handleSignOut}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </div>
                </NavLink>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                }}
              >
                <NavItem>
                  <NavLink href="/sign-up">
                    <div className="navLinkBtn">Sign up</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">
                    <div className="navLinkBtn">Log in</div>
                  </NavLink>
                </NavItem>
              </div>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      
      <Profile pos={show ? "open" : ""} />
    </div>
  );
};

export default Header;
