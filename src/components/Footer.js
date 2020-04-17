import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'space-evenly',
          padding: "30px",
          height: "150px",
          backgroundColor: "#000",
          color: "#fff",
          marginTop: "30px",
        }}
      >
        <div>
          <div>
            <span>powered by </span>
            <span style={{ color: "#379344" }}>spoonacular API</span>
          </div>
          <span>made by Tareq & Ion & Givara at DCI</span>{" "}
          <span>&copy; 2020</span>
          <div>All rights reserved</div>
        </div>
        <div>
           <div>
             
           </div>
          <Link style={{marginRight: '20px'}}>About Us</Link> <Link>Privacy Policy</Link>
        </div>
      </div>
    );
}
