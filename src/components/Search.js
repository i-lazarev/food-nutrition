import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { ApiContext } from "./ApiContext";
import Header from "./Header";
import Footer from "./Footer";

const Search = (props) => {
  const [recipies, setRecipies] = useState([]);
  const [query, setQuery] = useContext(ApiContext);
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [type, setType] = useState(
    props.location.state ? props.location.state.type : ""
  );
  const [recipeNumber, setRecipeNumber] = useState(12);

  const tareqKey="db603acba1014e209b0cda8a89aae478"
  const ionKey = "d21f98ccdf934ed5ac7c1e724093d571"

  useEffect(() => {
   
    fetch(
      `https://api.spoonacular.com/recipes/search?cuisine=${cuisine}&diet=${diet}&intolerances=${intolerance}&number=${recipeNumber}&type=${type}&offset=0&query=${query}&apiKey=${ionKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setRecipies(res.results))
      .catch((err) => {
        console.log(err);
      });
    
  }, [cuisine, diet, intolerance, type, query, recipeNumber]);

  const cuisineArray = [
    "African",
    "Chinese",
    "Japanese",
    "Korean",
    "Vietnamese",
    "Thai",
    "Indian",
    "British",
    "Irish",
    "French",
    "Italian",
    "Mexican",
    "Spanish",
    "Middle Eastern",
    "Jewish",
    "American",
    "Cajun",
    "Southern",
    "Greek",
    "German",
    "Nordic",
    "Eastern European",
    "Caribbean",
    "Latin American",
  ];

  const dietArray = [
    "Pescetarian",
    "Lacto Vegetarian",
    "Ovo Vegetarian",
    "Vegan",
    "Paleo",
    "Primal",
    "Vegetarian",
  ];
  const intoleranceArray = [
    "Dairy",
    "Egg",
    "Gluten",
    "Peanut",
    "Sesame",
    "Seafood",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ];
  const typeArray = [
    "Main Course",
    "Side Dish",
    "Dessert",
    "Appetizer",
    "Salad",
    "Bread",
    "Breakfast",
    "Soup",
    "Beverage",
    "Sauce",
    "Drink",
  ];

  const [dropdownOpen, setOpen] = useState({
    cuisine: false,
    diet: false,
    intolerance: false,
    type: false,
  });

  const [selection, setSelection] = useState({
    cuisine: "Any",
    diet: "Any",
    intolerance: "Any",
    type: props.location.state?props.location.state.type:"Any",
  });

  const toggle = (item) => {
    const newState = { ...dropdownOpen };
    newState[item] = !newState[item];
    setOpen(newState);
  };

  const changeSelection = (item, e) => {
    const newState = { ...selection };
    newState[item] = e.target.innerText;
    setSelection(newState);
  };

  return (
    <Fragment>
      <Header x="#000" />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        id="body"
      >
        <h1 style={{ textAlign: "center" }}>
          {query === "" ? "" : query.replace(/^\w/, (c) => c.toUpperCase())}
        </h1>

        <div className="drop-down-menu">
          <div
            style={{ margin: "20px", textAlign: "center" }}
            className="cuisine-dropdown filterHover"
          >
            <div className="cuisineTitle">Cuisine </div>
            <ButtonDropdown
              size="md"
              isOpen={dropdownOpen.cuisine}
              toggle={() => toggle("cuisine")}
            >
              <DropdownToggle className="drop-down-toggle" caret>
                {selection.cuisine}
              </DropdownToggle>
              <DropdownMenu>
                {cuisineArray.map((oneCuisine) => (
                  <DropdownItem
                    className="drop-down-item"
                    key={oneCuisine}
                    onClick={(e) => {
                      changeSelection("cuisine", e);
                      setCuisine(oneCuisine);
                    }}
                  >
                    {oneCuisine}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div
            style={{ margin: "20px", textAlign: "center" }}
            className="diet-dropdown filterHover"
          >
            <div className="cuisineTitle">Diet </div>
            <ButtonDropdown
              isOpen={dropdownOpen.diet}
              toggle={() => toggle("diet")}
            >
              <DropdownToggle className="drop-down-toggle" caret>
                {selection.diet}
              </DropdownToggle>
              <DropdownMenu>
                {dietArray.map((oneDiet) => (
                  <DropdownItem
                    className="drop-down-item"
                    key={oneDiet}
                    onClick={(e) => {
                      changeSelection("diet", e);
                      setDiet(oneDiet);
                    }}
                  >
                    {oneDiet}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div
            style={{ margin: "20px", textAlign: "center" }}
            className="intolerance-dropdown filterHover"
          >
            <div className="cuisineTitle ">Intolerance </div>
            <ButtonDropdown
              isOpen={dropdownOpen.intolerance}
              toggle={() => toggle("intolerance")}
            >
              <DropdownToggle className="drop-down-toggle" caret>
                {selection.intolerance}
              </DropdownToggle>
              <DropdownMenu>
                {intoleranceArray.map((oneIntol) => (
                  <DropdownItem
                    className="drop-down-item"
                    key={oneIntol}
                    onClick={(e) => {
                      changeSelection("intolerance", e);
                      setIntolerance(oneIntol);
                    }}
                  >
                    {oneIntol}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div
            style={{ margin: "20px", textAlign: "center" }}
            className="type-dropdown filterHover"
          >
            <div className="cuisineTitle">Type</div>
            <ButtonDropdown
              isOpen={dropdownOpen.type}
              toggle={() => toggle("type")}
            >
              <DropdownToggle className="drop-down-toggle" caret>
                {selection.type}
              </DropdownToggle>
              <DropdownMenu>
                {typeArray.map((oneType) => (
                  <DropdownItem
                    className="drop-down-item"
                    key={oneType}
                    onClick={(e) => {
                      changeSelection("type", e);
                      setType(oneType);
                    }}
                  >
                    {oneType}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <div className="recipies-section">
          {console.log(recipies)}
          {recipies.map((res) => (
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
        <div id="more-button-section">
          <Button
            id="more-button"
            onClick={() => setRecipeNumber(recipeNumber + 12)}
          >
            More
          </Button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Search;