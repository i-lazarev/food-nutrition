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
  const [servings, setServings] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const [token, setToken] = useContext(TokenContext);
  const [recID, setRecID] = useState();
  const [wineObj, setWineObj] = useState({});
  const [title, setTitle] = useState("")

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
        setTitle(res.title);
        setWineObj(res.winePairing);
        setIngredients(res.extendedIngredients);
        setRecID(res.id);
        if (token) {
          checkFav(res.id);
        }
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
    <div>
      <Header x="#000"  />
      <h2 className="recipe-title">{title.replace(/^\w/, (c) => c.toUpperCase())}</h2>
      {token ? (
              <NavLink style={{ textAlign: "center", margin: "1rem 0" }}
                className="star"
                
                title={isFav ? "remove from favorite" : "add to favorite"}
                onClick={handleAddToFav}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  color={isFav ? "yellow" : "gray"}
                />
              <span>{isFav ? "Remove from favorite" : "Add to favorite"}</span></NavLink>
            ) : (
              ""
            )}
      <div className="main-section">
        <div className="image-nutrition">
          <div className="recipe-image">
          <div className="image-fav-icon">
            <img id="image" src={recipe.image} alt={recipe.title} />
            
            </div>
            <div className="recipe-nutrition">
              <span>Calories:{ingDetails.calories}</span>
              <span>Carbs:{ingDetails.carbs}</span>
              <span>Fat: {ingDetails.fat}</span>
              <span>Protein: {ingDetails.protein}</span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="ingrediets-instructions">
          <div className="section">
            <h3 className="title">Ingredients</h3>
            <h5 className="text-servings">
              Servings:
              <input
                style={{ width: "30px", border: "none",marginLeft:"5px",fontWeight:"bold" }}
                type="Number"
                min="1"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
            </h5>

            <div className="ingredients-section">
              {console.log(recipe)}
              {ingredients.map((res) => (
                <div key={Math.random()} className="ingredients">
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
          </div><hr/>
          <div className="section">
            <h3 className="title">Instructions</h3>
            {instructions.map((res) => (
              <li key={Math.random()}>
                <span id="instruction-number">{res.number}</span><span id="instruction">{res.step}</span>
              </li>
            ))}
          </div>
            {wineObj.pairedWines  ? (
              
              <div className="section"><hr/>
                <h3 className="title">Wine pairing</h3>
                {wineObj.pairingText}
              </div>
            ) : (
              ""
            )}
          </div>
        
      </div>
      <Footer />
    </div>
  );
};
export default OneRecipe;
