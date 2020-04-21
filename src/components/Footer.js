import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink} from 'reactstrap'
import {
  faInstagram,
  faTwitter,
  faFacebookSquare,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          minHeight: "150px",
          backgroundColor: "#000",
          color: "#fff"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1000px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <div>
              <span>powered by </span>
              <NavLink
                style={{ display: "inline-block" }}
                href="https://spoonacular.com/"
              >
                <span style={{ color: "#379344" }}>spoonacular API</span>
              </NavLink>
            </div>
            <span>made by Tareq & Ion & Givara at DCI</span>{" "}
            <span>&copy; 2020</span>
            <div>All rights reserved</div>
          </div>
          <div>
            <div
              style={{
                fontSize: "24px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "200px",
                marginBottom: "10px",
              }}
            >
              <FontAwesomeIcon icon={faFacebookSquare} color="#1777F2" />
              <FontAwesomeIcon icon={faTwitter} color="#33a7f4" />
              <FontAwesomeIcon icon={faInstagram} color="#CA5191" />
              <FontAwesomeIcon icon={faPinterest} color="#f72541" />
              <FontAwesomeIcon icon={faYoutube} color="#e5162f" />
            </div>
            <Link to='#' style={{ marginRight: "20px" }}>About Us</Link>{" "}
            <Link to='#'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    );
}
