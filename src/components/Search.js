import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Search = () => {
  const searchRecipesComplex = fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&offset=0&query=burger", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })
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
const [recipies, setRecipies]= useState(searchRecipesComplex)

  const dietArray =["Pescetarian", "Lacto Vegetarian", "Ovo Vegetarian", "Vegan", "Paleo", "Primal",  "Vegetarian"]
  const intoleranceArray = ["Dairy", "Egg", "Gluten", "Peanut", "Sesame", "Seafood", "Shellfish", "Soy", "Sulfite", "Tree Nut",  "Wheat"]
  const typeArray =["Main Course", "Side Dish", "Dessert", "Appetizer", "Salad", "Bread", "Breakfast", "Soup", "Beverage", "Sauce", "Drink"]

  const [dropdownOpen, setOpen] = useState({cuisine:false, diet:false,intolerance:false, type:false})
  
  const [selection, setSelection] = useState({cuisine: "Any" , diet:"Any",intolerance:"Any", type:"Any"})

  const toggle = (item) => {
    const newState = {...dropdownOpen}
    newState[item]= !newState[item]
    setOpen(newState)
  };

  const changeSelection =(item, e)=> {
    const newState = {...selection}
    newState[item]=e.target.innerText
    setSelection(newState);
  };

  return (
    <div>
      <h1>Recipe Name</h1>
      {/* <div>
        <button>Recipes</button>
        <button>Products</button>
        <button>Menu Items</button>
        <button>Videos</button>
      </div> */}
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
      <div className="cuisine-dropdown">
        <label>Cuisine </label>
        <ButtonDropdown isOpen={dropdownOpen.cuisine} toggle={()=>toggle("cuisine")}>
          <DropdownToggle caret>{selection.cuisine}</DropdownToggle>
          <DropdownMenu>
            {cuisineArray.map(oneCuisine => (
              <DropdownItem key={oneCuisine} onClick={(e)=>changeSelection("cuisine",e)}>{oneCuisine}</DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div className="diet-dropdown">
        <label>Diet </label>
        <ButtonDropdown isOpen={dropdownOpen.diet} toggle={()=>toggle("diet")}>
          <DropdownToggle caret>{selection.diet}</DropdownToggle>
          <DropdownMenu>
            {dietArray.map(oneDiet => (
              <DropdownItem key={oneDiet} onClick={(e)=>changeSelection("diet", e)}>{oneDiet}</DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div className="intolerance-dropdown">
        <label>Intolerance </label>
        <ButtonDropdown isOpen={dropdownOpen.intolerance} toggle={()=>toggle("intolerance")}>
          <DropdownToggle caret>{selection.intolerance}</DropdownToggle>
          <DropdownMenu>
            {intoleranceArray.map(oneIntol => (
              <DropdownItem key={oneIntol} onClick={(e)=>changeSelection("intolerance", e)}>{oneIntol}</DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div className="type-dropdown">
        <label>Type</label>
        <ButtonDropdown isOpen={dropdownOpen.type} toggle={()=>toggle("type")}>
          <DropdownToggle caret>{selection.type}</DropdownToggle>
          <DropdownMenu>
            {typeArray.map(oneType => (
              <DropdownItem key={oneType} onClick={(e)=>changeSelection("type", e)}>{oneType}</DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    
      </div>
    </div>
  );
};

export default Search;
