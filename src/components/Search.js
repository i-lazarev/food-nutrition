import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import {Animated} from "react-animated-css";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { ApiContext } from "./ApiContext";

const Search = () => {
  const [recipies, setRecipies] = useState([]);
  const [query, setQuery] = useContext(ApiContext);
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [type, setType] = useState("");
  const [recipeNumber, setRecipeNumber] = useState(10);

  useEffect(() => {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?cuisine=${cuisine}&diet=${diet}&intolerances=${intolerance}&number=${recipeNumber}&type=${type}&offset=0&query=${query}`,
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
      .then(res => setRecipies(res.results))
      .catch(err => {
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
    "Latin American"
  ];

  const dietArray = [
    "Pescetarian",
    "Lacto Vegetarian",
    "Ovo Vegetarian",
    "Vegan",
    "Paleo",
    "Primal",
    "Vegetarian"
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
    "Wheat"
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
    "Drink"
  ];

  const [dropdownOpen, setOpen] = useState({
    cuisine: false,
    diet: false,
    intolerance: false,
    type: false
  });

  const [selection, setSelection] = useState({
    cuisine: "Any",
    diet: "Any",
    intolerance: "Any",
    type: "Any"
  });

  const toggle = item => {
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
    
    <div className="main-section">
    <h1>Recipe Name</h1>

      <div className="drop-down-menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div className="cuisine-dropdown ">
          <label className="cuisineTitle">Cuisine </label>
          <ButtonDropdown
            isOpen={dropdownOpen.cuisine}
            toggle={() => toggle("cuisine")}
          >
            <DropdownToggle caret>{selection.cuisine}</DropdownToggle>
            <DropdownMenu>
              {cuisineArray.map(oneCuisine => (
                <DropdownItem
                  key={oneCuisine}
                  onClick={e => {
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
        <div className="diet-dropdown">
          <label className="cuisineTitle">Diet </label>
          <ButtonDropdown
            isOpen={dropdownOpen.diet}
            toggle={() => toggle("diet")}
          >
            <DropdownToggle caret>{selection.diet}</DropdownToggle>
            <DropdownMenu>
              {dietArray.map(oneDiet => (
                <DropdownItem
                  key={oneDiet}
                  onClick={e => {
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
        <div className="intolerance-dropdown">
          <label className="cuisineTitle">Intolerance </label>
          <ButtonDropdown
            isOpen={dropdownOpen.intolerance}
            toggle={() => toggle("intolerance")}
          >
            <DropdownToggle caret>{selection.intolerance}</DropdownToggle>
            <DropdownMenu>
              {intoleranceArray.map(oneIntol => (
                <DropdownItem
                  key={oneIntol}
                  onClick={e => {
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
        <div className="type-dropdown">
          <label className="cuisineTitle">Type</label>
          <ButtonDropdown
            isOpen={dropdownOpen.type}
            toggle={() => toggle("type")}
          >
            <DropdownToggle caret>{selection.type}</DropdownToggle>
            <DropdownMenu>
              {typeArray.map(oneType => (
                <DropdownItem
                  key={oneType}
                  onClick={e => {
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
        {recipies.map(res => (
          <Animated key={res.id} animationIn="fadeIn"><Card
            className="card"
            
          >
            <CardImg
             className="card-image"
              top
              width="100px"
              src={`https://spoonacular.com/recipeImages/${res.image}`}
              alt={res.title}
            />
            <CardBody>
              <CardTitle>{res.title}</CardTitle>
              <Link to={`recipies/${res.id}`} className="btn-flip" data-back="Click me" data-front="Details"/>
            </CardBody>
          </Card></Animated>
        ))}
      </div>
      <Button className="load-more animated infinite bounce delay-2s" onClick={()=>setRecipeNumber(recipeNumber + 10)}>More</Button>
    </div>
  );
};

export default Search;


