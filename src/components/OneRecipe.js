import React, { useState, useEffect, useContext } from "react";
import "../styles/OneRecipe.css";
import Header from "./Header";
import Footer from "./Footer";
import { TokenContext } from "./TokenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "reactstrap";

const OneRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ingDetails, setIngDetails] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [servings, setServings] = useState(1)
  const [isFav, setIsFav] = useState(false);
  const [token, setToken] = useContext(TokenContext);
  const [recID, setRecID] = useState();

  

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?amount=1&apiKey=d21f98ccdf934ed5ac7c1e724093d571`,
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
        setIngredients(res.extendedIngredients);
        setRecID(res.id);
        setIngredients(res.extendedIngredients);
        if(token){
          checkFav(res.id)};
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/nutritionWidget.json?&apiKey=d21f98ccdf934ed5ac7c1e724093d571`,
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
    fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/analyzedInstructions?&apiKey=d21f98ccdf934ed5ac7c1e724093d571`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setInstructions(res[0].steps))
      .catch((err) => {
        console.log(err);
      });

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

  

  return (
    <div >
      <Header />
      <h2 style={{ textAlign: "center", margin:"1rem 0" }}>{recipe.title}</h2>
      {token ? <NavLink
      
      className="star"
      title={isFav ? "remove from favorite" : "add to favorite"}
      onClick={handleAddToFav}
    >
      <FontAwesomeIcon icon={faStar} color={isFav ? "yellow" : "gray"} />
    </NavLink> : "" }
      
    <div className="main-section">
        <div className="image-nutrition">
          <div className="recipe-image">
            <img id="image" src={recipe.image} alt={recipe.title} />
            <div className="recipe-nutrition">
              <span>Calories:{ingDetails.calories}</span>
              <span>Carbs:{ingDetails.carbs}</span>
              <span>Fat: {ingDetails.fat}</span>
              <span>Protein: {ingDetails.protein}</span>
            </div>
          </div>
        </div>
        <div className="ingrediets-instructions">
          <div className="ingredients-list">
         
            <h3 className="text">
              Ingredients 
            </h3>
            <h5 className="text">
                Servings: 
                <input style={{width:"30px", border:"none"}} type="Number" min="1" value={servings} onChange={(e)=>setServings(e.target.value)}/>
                {/* <button className="serving-button" onClick={(increase)}>+</button>
                <button className="serving-button" onClick={(decrease)}>-</button> */}
              </h5>

            <div className="ingredients-section">
              {console.log(recipe)}
              {ingredients.map((res) => (
                <div key={res.id} className="ingredients">
                  <p>
                    {res.amount * servings} {res.unit}
                  </p>
                  <div className="imagine-ingredients-section">
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${res.image}`}
                      alt={res.title}
                      className="image-ingredient"
                    />
                  </div>
                  <p>{res.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="instructions">
            <h3 style={{ textAlign: "center" }}>Instructions</h3>
            {instructions.map((res) => (
              <li key={Math.random()}>
                Step {res.number} : {res.step}
              </li>
            ))}
          </div>
        </div>

      </div>
      <Footer />
      </div>
  );
};
export default OneRecipe;
