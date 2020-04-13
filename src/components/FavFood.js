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
      <Header/>
        <h1>fav recipes</h1>
        <div className="recipies-section">
          {favArray.map((res) => (
            <Animated key={res.id} animationIn="fadeIn">
              <Card className="card">
                <CardImg
                  className="card-image"
                  top
                  width="100px"
                  src={res.image}
                  alt={res.title}
                />
                <CardBody>
                  <CardTitle>{res.title}</CardTitle>
                  <Link
                    to={`recipe/${res.id}`}
                    className="btn-flip"
                    data-back="Click me"
                    data-front="Details"
                  />
                </CardBody>
              </Card>
            </Animated>
          ))}
        </div>
        <Footer/>
      </div>
    );
}
