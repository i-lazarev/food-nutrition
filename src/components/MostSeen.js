import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function MostSeen() {

  const [recipes, setRecipes] = useState([])
  const key = 'd89d17872b3f4f8fa0da39073a9defdf'

  useEffect(() => {
    getRecipes()
  }, [recipes])

  const getRecipes = () => {
    fetch(`https://api.spoonacular.com/recipes/search?query=Salad&apiKey=${key}`, {
      "method": "GET",
      'Content-Type': 'application/json'
    })
      .then(res => res.json())
      .then(res => setRecipes(res.results))
      // .then(res => console.log(res.recipes))
      .catch(err => {
        console.log(err);
      });
  }

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
  return (
    <div>
      <p className='container'>TRENDING RECIPES</p>
      <div style={Section}>
        {recipes.map(rec => (

          <Link to={`recipe/${rec.id}`} style={title} >
            <div style={card} key={rec.id} className='animationCard hvr-wobble-skew'>
              <img
                className="card-image-all-food"
                width="100px"
                src={`https://spoonacular.com/recipeImages/${rec.image}`}
                alt={rec.title} />
              {rec.title.slice(0,15)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default MostSeen

const Section = {
  display: 'webkit-box',
  display: 'ms-lexbox',
  display: 'flex',
  msFlexWrap: 'wrap',
  flexWrap: 'wrap',
  msFlexPack: 'distribute',
  justifyContent: 'space-around',
  marginTop: '15px',
  // backgroundImage: 'url(https://picsum.photos/1000/1000?food)',
  background: '#fff',
  backgroundSize: 'cover'
}

const card = {
  width: '200px',
  minHeight: '200px',
  // lineHeight: '50px',
  borderRadius: '50%',
  MozBorderRadius: '50%',
  WebkitBorderRadius: '50%'
}

const title = {
  marginTop: '15px',
  textAlign: 'center',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontStyle: 'italic'
}