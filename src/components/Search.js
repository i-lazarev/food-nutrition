import React, { useState, useEffect, useContext } from "react";
import {  useHistory } from "react-router-dom";
import "../styles/Search.css";

import { Button } from "reactstrap";
import { ApiContext } from "./ApiContext";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useContext(ApiContext);
  const [diet, setDiet] = useState("");
  const [health, setHealth] = useState("");
  const [recipeNumber, setRecipeNumber] = useState(10);
  const apiKey = "d21f98ccdf934ed5ac7c1e724093d571"

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}`
    )
      .then(res => res.json())
      .then(data => setRecipes(data.results));
  }, [diet, health, query, recipeNumber]);
  

  const dietArray = ["balanced", "high-protein", "low-fat", "low-carb"];
  const healthArray = [
    "vegan",
    "vegetarian",
    "sugar-conscious",
    "peanut-free",
    "tree-nut-free",
    "alcohol-free	"
  ];
  const history = useHistory();
  // const handleClick = (label) =>{
  //   const result = recipes.filter(res=>res.recipe.label === label);
  //   console.log(label)
  //   history.push({pathname:"/recipe", state:result})
    
  // }

  return (
    <div className="main-section">
      <h1 style={{ textAlign: "center" }}>FILTER</h1>

      <div className="drop-down-menu">
        <div className="diet-dropdown">
          {dietArray.map(oneDiet => (
            <button
              onClick={() => {
                setDiet("&diet=" + oneDiet);
              }}
              key={oneDiet}
            >
              {oneDiet}
            </button>
          ))}
        </div>
        <div className="intolerance-dropdown">
          {healthArray.map(oneHealth => (
            <button
              onClick={() => {
                setHealth("&health=" + oneHealth);
              }}
              key={oneHealth}
            >
              {oneHealth}
            </button>
          ))}
        </div>
      </div>
      <div className="recipies-section">
      {console.log(recipes)}
        {recipes.map(res => (

            <div key={res.id}
             className="one-recipe" >
           
            <img
              className="one-recipe-img"
              src={res.image}
              height="100%"
              alt={res.title}
            ></img>

            </div>
        ))}
      </div>
      <Button
        className="load-more"
        onClick={() => setRecipeNumber(recipeNumber + 10)}
      >
        More
      </Button>
    </div>
  );
};

export default Search;
