import React, { useState, useEffect } from "react";
import {Link, Redirect} from "react-router-dom";
import "../styles/OneRecipe.css";

const OneRecipe = (props) => {
  const [recipeInfo, setrecipeInfo] = useState(props.location.state[0]);
  const [ingredient, setIngredient] = useState([]);
  const [ingDetails, setIngDetails] = useState([]);
  useEffect(() => {
    console.log(recipeInfo)
  });
  const digest = recipeInfo.recipe.digest
  const ingredients = recipeInfo.recipe.ingredients

  const capitalize=(word)=>{
   return word.charAt(0).toUpperCase() + word.substring(1)
  }

  return (
    <div className="main-section">
      <h2 style={{"textAlign":"center"}}>{capitalize(recipeInfo.recipe.label)}</h2>
      <div className="image-ingredients">
        <img src={recipeInfo.recipe.image} alt={recipeInfo.recipe.title} />
        <div className="nutrition-ingredients">
          <div className="nutrition">
            <h3>Nutrition</h3>
            <div >
            <li>Calories: {recipeInfo.recipe.calories.toFixed(1)} mg</li>
            {digest.map(info =>(<li key ={Math.random()}>{info.label}: {info.total.toFixed(1)} {info.unit}</li>))}
            </div>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <div>
            
              {ingredients.map(res => (
                <li key={Math.random()} className="ingredients-list">
                  {res.text}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href={recipeInfo.recipe.url}>Instructions</a> 
        
      </div>

      
    </div>
  );
};
export default OneRecipe;
