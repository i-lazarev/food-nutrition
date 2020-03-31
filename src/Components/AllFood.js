import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AllFood() {

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=5&offset=0&query=tomato", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
            }
        })
        const data = await response.json()
        setRecipes(data.results)
        console.log(data.results);
    }

    const [recipes, setRecipes] = useState([])


    return (
        <div style={Section}>
            {recipes.map(rec => (
                <div style={card}>
                    <img
                        className="card-image-all-food"
                        top='true'
                        width="100px"
                        src={`https://spoonacular.com/recipeImages/${rec.image}`}
                        alt={rec.title} />
                    <h4 style={title}>{rec.title}</h4>
                </div>
            ))}
        </div>
    )
}


export default AllFood

const Section = {
    display: 'webkit-box',
    display: 'ms-lexbox',
    display: 'flex',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    msFlexPack: 'distribute',
    justifyContent: 'space-around',
    marginTop: '15px'
}

const card = {
    width: '200px',
    minHeight: '200px',
    lineHeight: '200px',
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%'
}

const title = {
    marginTop: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'italic'
}