import React, { useState, useEffect, useContext } from "react";
import "../styles/OneRecipe.css";
import Header from "./Header";
import { TokenContext } from "./TokenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "reactstrap";

const OneRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [ingDetails, setIngDetails] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [token, setToken] = useContext(TokenContext);
  const [recID, setRecID] = useState();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?amount=1&apiKey=db603acba1014e209b0cda8a89aae478`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res);
        setRecID(res.id);
        setIngredient(res.extendedIngredients);
        if(token){
        checkFav(res.id);}
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/nutritionWidget.json?&apiKey=db603acba1014e209b0cda8a89aae478`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setIngDetails(res))
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id, token]);

  const handleAddToFav = () => {
    if (isFav) {
      fetch(`http://localhost:5000/remove-fav/${recID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setIsFav(!isFav);
          console.log(data);
        });
    } else {
      fetch("http://localhost:5000/add-fav", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ recipe: recipe }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setIsFav(!isFav);
          console.log(data);
        });
    }
  };

  const checkFav = (id) => {
    fetch(`http://localhost:5000/check-fav/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setIsFav(data));
  };

  return (
    <div className="main-section">
      <Header />
      <h2>{recipe.title}</h2>
      {token ? (
        <NavLink
          className="star"
          title={isFav ? "remove from favorite" : "add to favorite"}
          onClick={handleAddToFav}
        >
          <FontAwesomeIcon icon={faStar} color={isFav ? "yellow" : "gray"} />
        </NavLink>
      ) : (
        ""
      )}

      <div className="image-ingredients">
        <img src={recipe.image} alt={recipe.title} />
        <div className="nutrition-ingredients">
          <div className="ingredients">
            <h3>Nutrition</h3>
            <div>
              <li className="nutrition-list">
                <span>calories: </span>
                <span>{ingDetails.calories}</span>
              </li>
              <li className="nutrition-list">
                <span>carbs: </span>
                <span>{ingDetails.carbs}</span>
              </li>
              <li className="nutrition-list">
                <span>fat: </span>
                <span>{ingDetails.fat}</span>
              </li>
              <li className="nutrition-list">
                <span>protein: </span>
                <span>{ingDetails.protein}</span>
              </li>
            </div>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <div>
              {ingredient.map((res) => (
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
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};
export default OneRecipe;
