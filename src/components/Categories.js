import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';


function Categories() {
  const [recipes, setRecipes] = useState([]);
  const [recipesB, setRecipesB]=useState([]);
  const history=useHistory();
  const key = "d21f98ccdf934ed5ac7c1e724093d571";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/search?&type=Side Dish&offset=7&number=12&apiKey=${key} `,
      {
        method: "GET",
        "Content-Type": "application/json",
      }
    )
      .then((res) => res.json())
      .then((res) => setRecipes(res.results))
      .catch((err) => {
        console.log(err);
      });
      
        fetch(
          `https://api.spoonacular.com/recipes/search?&type=Dessert&offset=0&number=12&apiKey=${key} `,
          {
            method: "GET",
            "Content-Type": "application/json",
          }
        )
          .then((res) => res.json())
          .then((res) => setRecipesB(res.results))
         
          .catch((err) => {
            console.log(err);
          });
      
  };

  const showMore2 = () => {
    history.push({ pathname: "/recipes", state: { type: "Side Dish" } });
  };

  const showMore3 = () => {
    history.push({ pathname: "/recipes", state: { type: "Dessert" } });
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="CourseTitle"
        style={{
          textAlign: "left",
          fontSize: "54px",
          backgroundColor: "#b526f2",
          fontWeight: "900",
          padding: "20px",
          color: "#fff",
          width: "50%",
          position: "relative",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "150px",
            bottom: "-40px",
            backgroundColor: "#ededed",
            width: "20px",
            height: "200px",
            transform: "rotate(45deg)",
          }}
        ></div>
        Side Dish
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {recipes.map((res) => (
          <Link key={res.id} className="card-image" to={`recipe/${res.id}`}>
            <div id="image">
              <img
                src={`https://spoonacular.com/recipeImages/${res.image}`}
                alt={res.title}
                width="100%"
              />
            </div>
            <h2 id="recipe-title">
              {res.title.replace(/^\w/, (c) => c.toUpperCase())}
            </h2>
            <div id="time-icon">
              <i className="far fa-clock"></i>
              <span id="time">
                {res.readyInMinutes > 60
                  ? Math.floor(res.readyInMinutes / 60) + "h"
                  : res.readyInMinutes + "min"}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mainShowMore" onClick={showMore2}>
        Show More >>
      </div>

      <div
        className="CourseTitle"
        style={{
          textAlign: "left",
          fontSize: "54px",
          backgroundColor: "#f8b652",
          fontWeight: "900",
          padding: "20px",
          color: "#fff",
          width: "50%",
          position: "relative",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "150px",
            bottom: "-40px",
            backgroundColor: "#ededed",
            width: "20px",
            height: "200px",
            transform: "rotate(45deg)",
          }}
        ></div>
        Dessert
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {recipesB.map((res) => (
          <Link key={res.id} className="card-image" to={`recipe/${res.id}`}>
            <div id="image">
              <img
                src={`https://spoonacular.com/recipeImages/${res.image}`}
                alt={res.title}
                width="100%"
              />
            </div>
            <h2 id="recipe-title">
              {res.title.replace(/^\w/, (c) => c.toUpperCase())}
            </h2>
            <div id="time-icon">
              <i className="far fa-clock"></i>
              <span id="time">
                {res.readyInMinutes > 60
                  ? Math.floor(res.readyInMinutes / 60) + "h"
                  : res.readyInMinutes + "min"}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mainShowMore" onClick={showMore3}>
        Show More >>
      </div>
    </div>
  );
}

export default Categories;

