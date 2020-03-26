import React, { useState, useEffect } from "react";
import "../styles/OneRecipe.css";

const OneRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [ingDetails, setIngDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${match.params.id}/information`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        setRecipe(res);
        setIngredient(res.extendedIngredients);
      })
      .catch(err => {
        console.log(err);
      });
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${match.params.id}/nutritionWidget.json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
        }
      }
    )
      .then(res => res.json())
      .then(res => setIngDetails(res))
      .catch(err => {
        console.log(err);
      });
  }, [match.params.id]);

  return (
    <div className="main-section">
      <h2>{recipe.title}</h2>
      <div className="image-ingredients">
        <img src={recipe.image} alt={recipe.title} />
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

      <div>{console.log(recipe)}</div>
    </div>
  );
};
export default OneRecipe;
