import React, { useState, useEffect } from "react";
import "../styles/OneRecipe.css";

const OneRecipe = (props) => {
  const [recipe, setRecipe] = useState(props.location.state[0]);
  const [ingredient, setIngredient] = useState([]);
  const [ingDetails, setIngDetails] = useState([]);
  useEffect(() => {
    console.log(recipe)
  });

  return (
    <div className="main-section">
      <h2>{recipe.recipe.label}</h2>
      <div className="image-ingredients">
        <img src={recipe.recipe.image} alt={recipe.title} />
        <div className="nutrition-ingredients">
          <div className="ingredients">
            <h3>Nutrition</h3>
            <div >
            <li className="nutrition-list"><span>calories: </span><span>{ingDetails.calories}</span></li>
            <li className="nutrition-list"><span>carbs: </span><span>{ingDetails.carbs}</span></li>
            <li className="nutrition-list"><span>fat: </span><span>{ingDetails.fat}</span></li>
            <li className="nutrition-list"><span>protein: </span><span>{ingDetails.protein}</span></li>
            </div>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <div>
              {ingredient.map(res => (
                <li key={res.id} className="ingredients-list">
                  <span>{res.name} </span>
                  <span> {res.amount} </span>
                  <span>{res.unit}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Istructions</h3>
        <p>{recipe.instructions}</p>
      </div>

      
    </div>
  );
};
export default OneRecipe;
