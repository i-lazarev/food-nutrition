import React, { useContext, useState, useEffect } from 'react'
import { TokenContext } from './TokenContext'
import { Link } from "react-router-dom";
import "../styles/Search.css";
import { Animated } from "react-animated-css";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Header from './Header';
import Footer from './Footer';

export default function FavFood() {
    const [token, setToken]=useContext(TokenContext);
    const [favArray, setFavArray]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/get-fav/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setFavArray(data));
    },[token])

    return (
      <div>
        <Header x="#000" />
        <h1>fav recipes</h1>
        <div className="recipies-section">
          {favArray.map((res) => (
            <Link key={res.id} className="card-image" to={`recipe/${res.id}`}>
              <img
                src={res.image}
                alt={res.title}
                width="100%"
              />
              <p id="recipe-title">{res.title}</p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
}
