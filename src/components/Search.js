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

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=3f78256c&app_key=970c0d4d94087b8a1bb7112cd5c28104${health}${diet}&from=0&to=${recipeNumber}`
    )
      .then(res => res.json())
      .then(data => setRecipes(data.hits));
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
  const handleClick = (label) =>{
    const result = recipes.filter(res=>res.recipe.label === label);
    console.log(label)
    history.push({pathname:"/recipe", state:result})
    
  }

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

            <div key={Math.random()}
             className="one-recipe" onClick={handleClick.bind(this,res.recipe.label)}>
            {console.log(res.recipe.label)}
            <img
              className="one-recipe-img"
              src={res.recipe.image}
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
