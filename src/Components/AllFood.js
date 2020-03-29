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
        <div className="recipies-section-all-food">
            {recipes.map(rec => (
                <div  className="card-all-food">
                    <img
                        className="card-image-all-food"
                        top
                        width="100px"
                        src={`https://spoonacular.com/recipeImages/${rec.image}`}
                        alt={rec.title} />
                </div>
            ))}
        </div>
    )
}


export default AllFood
