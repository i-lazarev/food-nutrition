import React, { useState, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Link } from 'react-router-dom'

function AllFood() {
    const [recipes, setRecipes] = useContext(ContextAPI)


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
